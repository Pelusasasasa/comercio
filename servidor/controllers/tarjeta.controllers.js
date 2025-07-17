const Tarjeta = require('../models/Tarjeta');

const borrarTarjeta = async(req, res) => {
    const { id } = req.params;

    try {
        const tarjeta = await Tarjeta.findByIdAndDelete(id);

        if(!tarjeta) return res.status(404).json({
            ok: false,
            msg: 'Tarjeta no encontrada'
        });
        
        res.status(200).json({
            ok: true,
            tarjeta
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar tarjeta, hable con el administrador'
        });
    }
};

const crearTarjeta = async(req, res) => {
    console.log(req.body)
    try {
        const tarjeta = new Tarjeta(req.body);
        await tarjeta.save();

        res.status(201).json({
            ok: true,
            tarjeta
        });
        
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error al crear tarjeta, hable con el administrador'
        });
    }
};

const modificarTarjeta = async(req, res) => {
    const { id } = req.params;

    try {
        const tarjeta = await Tarjeta.findByIdAndUpdate(id, req.body, { new: true });

        if(!tarjeta) return res.status(404).json({
            ok: false,
            msg: 'Tarjeta no encontrada'
        });

        res.status(200).json({
            ok: true,
            tarjeta
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error al modificar tarjeta, hable con el administrador'
        });
    }
};

const traerTarjetas = async(req, res) => {
    try {
        const tarjetas = await Tarjeta.find();

        res.status(200).json({
            ok: true,
            tarjetas
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error al traer tarjetas, hable con el administrador'
        });
    }
};

const traerTarjetaPorId = async(req, res) => {
    const { id } = req.params;

    try {
        const tarjeta = await Tarjeta.findById(id);

        if(!tarjeta) return res.status(404).json({
            ok: false,
            msg: 'Tarjeta no encontrada'
        });

        res.status(200).json({
            ok: true,
            tarjeta
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Error al traer tarjeta, hable con el administrador'
        });
    }
};

module.exports = {
    borrarTarjeta,
    crearTarjeta,
    modificarTarjeta,
    traerTarjetas,
    traerTarjetaPorId
}