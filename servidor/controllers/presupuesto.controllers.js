const Presupuesto = require("../models/Presupuesto");
const { cargarMovimientos } = require("../services/movimientoStock.services");
const { actualizarNumero } = require("../services/numero.services");


const borrarPresupuesto = async(req, res) => {
    const { id } = req.params;
    try {
        const presupuesto = await Presupuesto.findByIdAndDelete(id);

        if(!presupuesto) return res.status(400).json({
            ok: false,
            msg: 'No existe el presupuesto'
        });

        res.status(200).json({
            ok: true,
            presupuesto
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo borrar el presupuesto, hable con el administrador'
        })
    }
};

const crearPresupuesto = async(req, res) => {
    try {
        const numero = await actualizarNumero('PRESUPUESTO');
        req.body.numeroComprobante = `${numero.prefijo}-${numero.puntoVenta.toString().padStart(4, '0')}-${numero.numero.toString().padStart(8,'0')}`;
        const movimiento = await cargarMovimientos(req.body.productos, 'PRESUPUESTO', req.body.numeroComprobante, req.body.creadoPor);

        if(!movimiento.ok) return res.status(400).json({
            ok: false,
            msg: 'No se pudo cargar los movimientos de stock del presupusto, hable con el administrador'
        });

        const presupuesto = new Presupuesto(req.body);
        await presupuesto.save();

        res.status(200).json({
            ok: true,
            presupuesto
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'No se pudo crear el presupuesto, hable con el adinistrador'
        })
    }
};

const modificarPresupuesto = async(req, res) => {
    const { id } = req.params;
    try {
            const presupuesto = await Presupuesto.findByIdAndUpdate(id, req.body, { new: true });
            if(!presupuesto) return res.status(500).json({
                ok: false,
                msg: 'No existe el presupuesto'
            });

            res.status(200).json({
                ok: true,
                presupuesto
            })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar el presupuesto, hable con el administrador'
        })
    }
};

const traerPresupuestosPorFecha = async(req, res) => {
    const { desde, hasta} = req.params;
    try {
        const presupuestos = await Presupuesto.find({
            $and: [
                {fecha: {$gte: new Date(desde)}},
                {fecha: {$lte: new Date(hasta + "T23:59:59.000Z")}}
            ]
        })
        .populate('codigoCliente', ['codigo', 'nombre']);
        res.status(200).json({
            ok: true,
            presupuestos
        })
    } catch (error) {
        console.error(error);
        (error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los presupuestos, hable con el administrador'
        })
    }
};

const traerPresupuestoPorId = async(req, res) => {
    const { id } = req.params;
    try {
        const presupuesto = await Presupuesto.findById(id);

        res.status(200).json({
            ok: true,
            presupuesto
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener presupuesto, hable con el administrador'
        })
    }
}


module.exports = {
    borrarPresupuesto,
    crearPresupuesto,
    modificarPresupuesto,
    traerPresupuestoPorId,
    traerPresupuestosPorFecha
}
