const Numero = require('../models/Numero');

const borrarNumero = async(req, res) => {
    const { id } = req.params;
    try {
        const numero = await Numero.findByIdAndDelete(id);

        if(!numero) return res.status(404).json({
            ok: false,
            msg: 'No se encontro el numero'
        });

        res.status(200).json({
            ok: true,
            numero
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo borrar el numero, hable con el administrador'
        })
    }
};

const crearNumero = async(req, res) => {
    try {
        const numero = new Numero(req.body);

        await numero.save();

        res.status(201).json({
            ok: true,
            numero
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo crear el numero, hable con el administrador'
        })
    }
};

const modificarNumero = async(req, res) => {
    const { id } = req.params;
    try {
        const numero = await Numero.findByIdAndUpdate(id, req.body, {new: true});

        if(!numero) return res.status(404).json({
            ok: false,
            msg: 'No se encontro el numero'
        });

        res.status(200).json({
            ok: true,
            numero
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar el numero, hable con el administrador'
        })
    }
};

const traerNumeros = async(req, res) => {
    try {
        const numeros = await Numero.find();

        res.status(200).json({
            ok: true,
            numeros
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los numeros, hable con el administrador'
        })
    }
};

const traerNumeroPorTipo = async(req, res) => {
    const { tipo } = req.params;

    try {
        const numero = await Numero.findOne({tipo});

        if(!numero) return res.status(404).json({
            ok: false,
            msg: 'no se pudo obtener el numero'
        })

        res.status(200).json({
            ok: true,
            numero
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false
        })
    }
};



module.exports = {
    borrarNumero,
    crearNumero,
    modificarNumero,
    traerNumeros,
    traerNumeroPorTipo
};