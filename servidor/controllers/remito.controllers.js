const Remito = require('../models/Remito');
const { cargarMovimientos } = require('../services/movimientoStock.services');
const { actualizarNumero } = require('../services/numero.services');
const { cambiarStock } = require('../services/producto.services');

const borrarRemito = async(req, res) => {
    try {
        const remito = await Remito.findByIdAndDelete(req.params.id);

        if(!remito) return res.status(404).json({
            ok: false,
            msg: 'No existe un remito con ese id'
        });

        res.status(200).json({
            ok: true,
            remito
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar el remito, hable con el administrador'
        })
    }
};

const crearRemito = async(req, res) => {
    try {
        const numero = await actualizarNumero('REMITO');
        req.body.numeroComprobante = `${numero.prefijo}-${numero.puntoVenta.toString().padStart(4, '0')}-${numero.numero.toString().padStart(8, '0')}`;
        const okMovimiento = await cargarMovimientos(req.body.productos, 'REMITO', req.body.numeroComprobante, req.body.creadoPor);

        if (!okMovimiento) return res.status(400).json({
            ok: false,
            msg: 'No se pudo cargar los moviminetos de stock del remito, hable con el administrador'
        });

        const cambioStock = await cambiarStock(req.body.productos);
        console.log(cambioStock)

        
        const remito = new Remito(req.body);
        await remito.save();

        res.status(201).json({
            ok: true,
            remito
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el recibo, hable con el administrador'
        })
    }


};

const modificarRemito = async(req, res) => {
    const { id } = req.params;

    try {
        const remito = await Remito.findByIdAndUpdate(id, req.body, { new: true });
        if(!remito) return res.status(404).json({ 
            ok: false, 
            msg: "Remito no encontrado"
        });

        res.status(200).json({
            ok: true,
            remito
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al modificar el remito, hable con el administrador'
        })
    }
};

const traerRemitos = async(req, res) => {
    try {
        const remitos = await Remito.find();

        res.status(200).json({
            ok: true,
            remitos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudieron obtener los remitos, hable con el administrador'
        })
    }
};

const traerRemitosActivos = async(req, res) => {
    try {
        const remitos = await Remito.find({ pasado: false })
            .populate('codigoCliente', ['codigo', 'nombre']);

        res.status(200).json({
            ok: true,
            remitos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudieron obtener los remitos, hable con el administrador'
        })
    }
};

const traerRemitosNoActivos = async(req, res) => {
    try {
        const remitos = await Remito.find({ pasado: true })
            .populate('cliente', 'codigo');

        res.status(200).json({
            ok: true,
            remitos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudieron obtener los remitos, hable con el administrador'
        })
    }
};

module.exports = {
    borrarRemito,
    crearRemito,
    modificarRemito,
    traerRemitos,
    traerRemitosActivos,
    traerRemitosNoActivos
};