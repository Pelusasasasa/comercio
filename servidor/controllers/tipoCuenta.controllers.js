const TipoCuenta = require('../models/TipoCuenta');

const borrarTipoCuenta = async(req, res) => {
    const { id } = req.params;

    try {
        const tipoCuenta = await TipoCuenta.findByIdAndDelete(id);

        if(!tipoCuenta) return res.status(400).json({
            ok: false,
            msg: 'No se encontró el tipo de cuenta'
        });

        res.status(200).json({
            ok: true,
            tipoCuenta
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo borrar el tipo de cuenta, Hable con el administrador'
        });
    }
};

const cargarTipoCuenta = async(req, res) => {
    const { nombre } = req.body;
    try {

        const existeTipoCuenta = await TipoCuenta.findOne({ nombre });

        if(existeTipoCuenta) return res.status(400).json({
            ok: false,
            msg: 'El tipo de cuenta ya existe'
        });
        
        const tipoCuenta = new TipoCuenta(req.body);

        await tipoCuenta.save();

        res.status(201).json({
            ok: true,
            tipoCuenta
        });
        
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

const modificarTipoCuenta = async(req, res) => {
    const { id } = req.params;

    try {
        const tipoCuenta = await TipoCuenta.findByIdAndUpdate(id, req.body, { new: true });

        if(!tipoCuenta) return res.status(400).json({
            ok: false,
            msg: 'No se encontró el tipo de cuenta'
        });

        res.status(200).json({
            ok: true,
            tipoCuenta
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar el tipo de cuenta, Hable con el administrador'
        });
    }
};

const traerTipoCuentas = async(req, res) => {
    try {
        const tipoCuentas = await TipoCuenta.find();

        res.status(200).json({
            ok: true,
            tipoCuentas
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los tipos de cuentas, Hable con el administrador'
        });
    }
};

const traerTipoCuentaPorId = async(req, res) => {
    const { id } = req.params;
    try {
        const tipoCuentas = await TipoCuenta.findbyId(id);

        res.status(200).json({
            ok: true,
            tipoCuentas
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los tipos de cuentas, Hable con el administrador'
        });
    }
};

const traerNombres = async(req, res) => {
    try {
        const tipoCuentas = await TipoCuenta.find({}, 'nombre');

        res.status(200).json({
            ok: true,
            tipoCuentas
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los nombres de los tipos de cuentas, Hable con el administrador'
        });
    }
};


module.exports = {
    borrarTipoCuenta,
    cargarTipoCuenta,
    modificarTipoCuenta,
    traerTipoCuentas,
    traerTipoCuentaPorId,
    traerNombres
}