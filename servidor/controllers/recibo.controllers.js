const Recibo = require('../models/Recibo');
const { actualizarNumero } = require('../services/numero.services');

const borrarRecibo = async(req, res) => {
    const { id } = req.params;

    try {

        const recibo = await Recibo.findById(id);
        if (!recibo) {
            return res.status(404).json({ 
                ok:false,
                msg: "Recibo no encontrado" });
        };

        res.status(200).json({ 
            ok: true, 
            recibo
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al eliminar el recibo, hable con el administrador"
        });
    }
};

const crearRecibo = async(req, res) => {
    try {
        const numero = await actualizarNumero('RECIBO');
        req.body.numeroComprobante = numero;
        req.body.creadoPor = '684c8b934f2e0d9c408e47e2';

        
        const recibo = new Recibo(req.body);
        await recibo.save();

        res.status(201).json({ 
            ok: true, 
            recibo 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al crear el recibo, hable con el administrador"
        });
    }
};

const modificarRecibo = async(req, res) => {
    const { id } = req.params;

    try {
        const recibo = await Recibo.findByIdAndUpdate(id, req.body, { new: true });
        if(!recibo) return res.status(404).json({ 
            ok: false, 
            msg: "Recibo no encontrado" 
        });

        res.status(200).json({ 
            ok: true, 
            recibo 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al modificar el recibo, hable con el administrador"
        });
    }
};

const traerRecibos = async(req, res) => {
    try {
        const recibos = await Recibo.find()
            .populate('cliente', 'nombre')
            .populate('creadoPor', 'nombre');
        
        res.status(200).json({
            ok: true,
            recibos
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false, 
            msg: "Error al obtener los recibos, hable con el administrador"
        })
    }
};

const traerReciboPorId = async(req, res) => {
    const { id } = req.params;
    try {
        const recibo = await Recibo.findById(id)
            .populate('cliente', 'nombre')
            .populate('creadoPor', 'nombre');
            
        if (!recibo) return res.status(404).json({
            ok: false, 
            msg: "Recibo no encontrado"
        });

        res.status(200).json({
            ok: true,
            recibo
        });
    }catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false, 
            msg: "Error al obtener el recibo, hable con el administrador"
        });
    }
}

module.exports = {
    borrarRecibo,
    crearRecibo,
    modificarRecibo,
    traerRecibos,
    traerReciboPorId
}