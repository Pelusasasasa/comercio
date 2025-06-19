const MovimientoStock = require('../models/MovimientoStock');

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
        const movimineto = new MovimientoStock(req.body);
        await movimineto.save();

        res.status(200).json({
            ok: true,
            movimineto
        });

    } catch (error) {
        console.log(error);
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
            msg: 'No existe el movimientp'
        });

        res.status(200).json({
            ok: true,
            movimiento
        });
    } catch (error) {
        console.log(error);
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
        .populate('creadoPor', 'nombre')
        .sort({_id: -1});

        res.status(200).json({
            ok: true,
            movimientos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los movimientos, hable con el administrador'
        })
    }
};

const traerMovimientosPorTipoYNumero = async(req, res) => {
    const {numeroComprobante, tipo} = req.params;
    console.log(tipo, numeroComprobante);
    try {
        const movimientos = await MovimientoStock.findOne({
            $and: [
                {tipo},
                {numeroComprobante}
            ]
        });

        res.status(200).json({
            ok: true,
            movimientos
        });
    } catch (error) {
        console.log(error);
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
            .populate('creadoPor', 'nombre')
            .sort({_id: -1})

        res.status(200).json({
            ok: true,
            movimientos
        });
    } catch (error) {
        console.log(error);
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