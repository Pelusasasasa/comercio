const Venta = require('../models/Venta');
const { actualizarNumero } = require('../services/numero.services');

const borrarVenta = async(req, res) => {
    const { id } = req.params;
    try {
        const venta = await Venta.findByIdAndDelete(id)

        if(!venta) return res.status(400).json({
            ok: false,
            msg: 'No existe la venta'
        });

        res.status(200).json({
            ok: true,
            venta
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo borrar la venta, hable con el administrador'
        })
    }
};

const agregarVenta = async(req, res) => {
    try {
        const numero = await actualizarNumero('CONTADO');
        req.body.numeroComprobante = `${numero.prefijo}-${numero.puntoVenta.toString().padStart(4, '0')}-${numero.numero.toString().padStart(8,'0')}`;

        const venta = new Venta(req.body);

        await venta.save();

        res.status(200).json({
            ok: true,
            venta
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo cargar la venta, Hable con el administrador'
        })
    }

};

const modificarVenta = async(req, res) => {
    const { id } = req.params;
    try {
        const venta = await Venta.findByIdAndUpdate(id, req.body, {new: true})

        if(!venta) return res.status(400).json({
            ok: false,
            msg: 'No existe la venta'
        });

        res.status(200).json({
            ok: true,
            venta
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar la venta, hable con el administrador'
        })
    }
};

const traerVentaPorId = async(req, res) => {
    const { id } = req.params;
    try {
        const venta = await Venta.findById(id);

        res.status(200).json({
            ok: true,
            venta
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo encontrar la venta, hable con el administrador'
        })
    }
};

const traerVentas = async(req, res) => {
    try {
        const ventas = await Venta.find();

        res.status(200).json({
            ok: true,
            ventas
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo encontrar las ventas, hable con el administrador'
        })
    }
};

module.exports = {
    borrarVenta,
    agregarVenta,
    modificarVenta,
    traerVentaPorId,
    traerVentas
};