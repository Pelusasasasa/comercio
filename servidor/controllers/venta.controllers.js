const Venta = require('../models/Venta');
const { modificarSaldoCliente } = require('../services/cliente.services');
const { crearCompensada } = require('../services/cuentaCompensada.services');
const { crearHistorica } = require('../services/cuentaHistorica.services');
const { cargarMovimientos } = require('../services/movimientoStock.services');
const { actualizarNumero } = require('../services/numero.services');
const { cambiarStock } = require('../services/producto.services');

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
        const numero = await actualizarNumero(req.body.tipoComprobante);
        req.body.numeroComprobante = `${numero.prefijo}-${numero.puntoVenta.toString().padStart(4, '0')}-${numero.numero.toString().padStart(8,'0')}`;
        const movimiento = await cargarMovimientos(req.body.productos, req.body.tipoComprobante, req.body.numeroComprobante, req.body.creadoPor, req.body.tipoCliente, req.body.codigoCliente)

        if(!movimiento.ok) return res.status(400).json({
            ok: false,
            msg: 'No se pudo cargar los movimientos de stock de la venta, hable con el administrador'
        });

        const cambioStock = await cambiarStock(req.body.productos);

        if(!cambioStock.ok) return res.status(400).json({
            ok: false,
            msg: 'No se pudo descontar el stock de los productos de la venta, hable con el administrador'
        });
        console.log(req.body.tipoComprobante);
        if(req.body.tipoComprobante === 'CORRIENTE'){
            const compensada = await crearCompensada(req.body);
            

            if(!compensada.ok) return res.status(400).json({
                ok: false,
                msg: 'No se pudo agregar la cuenta compensada, hable con el administrador'
            });

            const historica = await crearHistorica(req.body);

            if(!historica.ok) return res.status(400).json({
                ok: false,
                msg: 'No se pudo crear la cuenta histórica, hable con el administrador'
            });

            const saldo = await modificarSaldoCliente(req.body.codigoCliente, req.body.precio);
        };

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

const traerVentasPorTipoYFecha = async(req, res) => {
    const { type, desde, hasta} = req.params;
    try {
        const ventas = await Venta.find({
            $and: [
                {tipoComprobante: type},
                {fecha: {$gte: new Date(desde)}},
                {fecha: {$lte: new Date(hasta + "T23:59:59.000Z")}}
            ]
        })
        .populate('codigoCliente', ['nombre', 'codigo']);

        res.status(200).json({
            ok: true,
            ventas
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo encontrar las ventas, hable con el administrador'
        })
    }
}

module.exports = {
    borrarVenta,
    agregarVenta,
    modificarVenta,
    traerVentaPorId,
    traerVentas,
    traerVentasPorTipoYFecha
};