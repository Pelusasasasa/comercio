const MovimientoStock = require('../models/MovimientoStock');

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
}

module.exports = {
    borrarMovientoStock,
    crearMovimientoStock
};