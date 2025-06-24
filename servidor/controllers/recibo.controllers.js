const Recibo = require('../models/Recibo');

const borrarRecibo = async(req, res) => {
    const { id } = req.params;

    try {

        const recibo = await Recibo.findById(id);
        if (!recibo) {
            return res.status(404).json({ 
                ok:false,
                message: "Recibo no encontrado" });
        };

        res.status(200).json({ 
            ok: true, 
            recibo
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false, 
            message: "Error al eliminar el recibo, hable con el administrador"
        });
    }
};

const crearRecibo = async(req, res) => {
    try {
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
            message: "Error al crear el recibo, hable con el administrador"
        });
    }
};

const modificarRecibo = async(req, res) => {
    const { id } = req.params;

    try {
        const recibo = await Recibo.findByIdAndUpdate(id, req.body, { new: true });
        if(!recibo) return res.status(404).json({ 
            ok: false, 
            message: "Recibo no encontrado" 
        });

        res.status(200).json({ 
            ok: true, 
            recibo 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            ok: false, 
            message: "Error al modificar el recibo, hable con el administrador"
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
            message: "Error al obtener los recibos, hable con el administrador"
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
            message: "Recibo no encontrado"
        });

        res.status(200).json({
            ok: true,
            recibo
        });
    }catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false, 
            message: "Error al obtener el recibo, hable con el administrador"
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