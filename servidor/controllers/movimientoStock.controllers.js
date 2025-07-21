const MovimientoStock = require('../models/MovimientoStock');
const { modificarStock } = require('../services/producto.services');

const borrarMovimientos = async(req, res) => {
    const { id } = req.params;
    try {
        const movimiento = await MovimientoStock.findByIdAndDelete(id);

        if(!movimiento) return res.status(404).json({
            ok: false,
            msg: 'No se encontro el movimiento'
        });

        res.status(200).json({
            ok: true,
            movimiento
        })
    } catch (error) {
        
    }
};

const crearMovimientoStock = async(req, res) => {
    try {

        const result = await modificarStock(req.body.producto, req.body.stockAhora);

        if(!result.ok) return res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar el stock del producto'
        })
        
        const movimiento = new MovimientoStock(req.body);
        await movimiento.save();

        res.status(200).json({
            ok: true,
            movimiento
        });

    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

const modificarMovimiento = async(req, res) => {
    const { id } = req.params;
    try {
        const movimiento = await MovimientoStock.findByIdAndUpdate(id, req.body, {new: true});

        if(!movimiento) return res.status(404).json({
            ok: false,
            msg: 'No existe el movimiento'
        });

        const result = await MovimientoStock.findById(movimiento._id)
        .populate('producto', 'descripcion')
        .populate('codigoCliente', ['nombre', 'codigo'])
        .populate('creadoPor', 'nombre')
        .sort({_id: -1});

        res.status(200).json({
            ok: true,
            movimiento: result
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar los movimientos '
        })
    }
};

const traerMovimientosPorProducto = async(req, res) => {
    const { producto } = req.params;

    try {
        const movimientos = await MovimientoStock.find({producto})
        .populate('producto', 'descripcion')
        .populate('codigoCliente', ['nombre', 'codigo'])
        .populate('creadoPor', 'nombre')
        .sort({_id: -1});


        res.status(200).json({
            ok: true,
            movimientos
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los movimientos, hable con el administrador'
        })
    }
};

const traerMovimientosPorTipoYNumero = async(req, res) => {
    const {numeroComprobante, tipo} = req.params;
    try {
        const movimientos = await MovimientoStock.find({
            $and: [
                {tipo},
                {numeroComprobante}
            ]
        })
        .populate('producto', ['descripcion', 'codigo'])
        .populate('codigoCliente', ['nombre', 'codigo'])
        .populate('creadoPor', 'nombre');

        res.status(200).json({
            ok: true,
            movimientos
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los movimientos, hable con el administador'
        })
    }
};

const traerMovimientos = async(req, res) => {
    try {
        const movimientos = await MovimientoStock.find()
            .populate('producto', 'descripcion')
            .populate('codigoCliente', ['nombre', 'codigo'])
            .populate('creadoPor', 'nombre')
            .sort({_id: -1})

        res.status(200).json({
            ok: true,
            movimientos
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los movimientos, hable con el administrador'
        })
    }
}


module.exports = {
    borrarMovimientos,
    crearMovimientoStock,
    modificarMovimiento,
    traerMovimientos,
    traerMovimientosPorProducto,
    traerMovimientosPorTipoYNumero
};