const Recibo = require('../models/Recibo');
const { modificarSaldoCliente } = require('../services/cliente.services');
const { modificarcompensada } = require('../services/cuentaCompensada.services');
const { crearHistorica } = require('../services/cuentaHistorica.services');
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
        console.error(error);;
        res.status(500).json({ 
            ok: false, 
            msg: "Error al eliminar el recibo, hable con el administrador"
        });
    }
};

const crearRecibo = async(req, res) => {
    try {
        const {codigoCliente, importe, observaciones, creadoPor} = req.body;
        const numero = await actualizarNumero('RECIBO');
        req.body.numeroComprobante = `${numero.prefijo}-${numero.puntoVenta.toString().padStart(4, '0')}-${numero.numero.toString().padStart(8,'0')}`;

        if(req.body.items.length > 0){
            modificarcompensada(req.body.items);
        };

        const historica = crearHistorica({codigoCliente, tipoComprobante: 'RECIBO', numeroComprobante: req.body.numeroComprobante, precio: importe, observaciones, creadoPor})

        const saldo = await modificarSaldoCliente(req.body.codigoCliente, req.body.importe);
        const recibo = new Recibo(req.body);
        await recibo.save();

        res.status(201).json({ 
            ok: true, 
            recibo 
        });
    } catch (error) {
        console.error(error);;
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
        console.error(error);;
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
        console.error(error);;
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
        console.error(error);;
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