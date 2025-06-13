const TipoTarjeta = require('../models/TipoTarjeta');

const borrarTipoTarjeta = async(req, res) => {
    const { id } = req.params;
    
    try {
        const tipoTarjeta = await TipoTarjeta.findByIdAndDelete(id);

        if(!tipoTarjeta) return res.status(404).json({
            ok: false,
            msg: 'No existe el tipo de tarjeta'
        });

        res.status(200).json({
            ok: true,
            tipoTarjeta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el tipo de Tarjeta, Por favor hable con el administrador'
        });
    }
};

const crearTipoTarjeta = async(req, res) => {
    const  { nombre } = req.body;
    try {

        let tipoTarjeta = await TipoTarjeta.findOne({ nombre });

        if(tipoTarjeta) return res.status(400).json({
            ok: false,
            msg: 'El tipo de tarjeta ya existe'
        });
        
        tipoTarjeta = new TipoTarjeta(req.body);
        await tipoTarjeta.save();   
        
        res.status(201).json({
            ok: true,
            tipoTarjeta
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al cargar la tarjeta, Por favor hable con el administrador'
        });
    }
};

const modificarTipoTarjeta = async(req, res) => {
    const { id } = req.params;

    try {
        const tipoTarjeta = await TipoTarjeta.findByIdAndUpdate(id, req.body, { new: true });

        if(!tipoTarjeta) return res.status(404).json({
            ok: false,
            msg: 'No existe el tipo de tarjeta'
        });

        res.status(200).json({
            ok: true,
            tipoTarjeta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al modificar el tipo de Tarjeta, Por favor hable con el administrador'
        });
    }
};

const traerNombres = async(req, res) => {
    try {
        const tipoTarjeta = await TipoTarjeta.find({}, { nombre: 1 });

        res.status(200).json({
            ok: true,
            tipoTarjeta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer los tipos de Tarjeta, Por favor hable con el administrador'
        });
    }

}

const traerTipoTarjetas = async(req, res) => {

    try {
        const tipoTarjeta = await TipoTarjeta.find();

        res.status(200).json({
            ok: true,
            tipoTarjeta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer los tipos de Tarjeta, Por favor hable con el administrador'
        });
    }
};

const traerTipoTarjeta = async(req, res) => {
    const { id } = req.params;

    try {
        const tipoTarjeta = await TipoTarjeta.findById(id);

        if(!tipoTarjeta) return res.status(404).json({
            ok: false,
            msg: 'No existe el tipo de tarjeta'
        });

        res.status(200).json({
            ok: true,
            tipoTarjeta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer el tipo de Tarjeta, Por favor hable con el administrador'
        });
    }
};

const pausarTipoTarjeta = async(req, res) => {
    const { id } = req.params;

    try {
        const tipoTarjeta = await TipoTarjeta.findById(id);

        if(!tipoTarjeta) return res.status(404).json({
            ok: false,
            msg: 'No existe el tipo de tarjeta'
        });

        tipoTarjeta.activo = !tipoTarjeta.activo;

        tipoTarjeta.save()

        res.status(200).json({
            ok: true,
            tipoTarjeta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al pausar el tipo de Tarjeta, Por favor hable con el administrador'
        });
    }
};

module.exports = {
    borrarTipoTarjeta,
    crearTipoTarjeta,
    modificarTipoTarjeta,
    pausarTipoTarjeta,
    traerNombres,
    traerTipoTarjeta,
    traerTipoTarjetas
};