const  CuentaHistorica = require('../models/CuentaHistorica');

const borrarCuentaHistorica = async(req, res) => {
    const { id } = req.params;

    try {
        const historica = await CuentaHistorica.findByIdAndDelete(id);

        if(!historica) return res.status(404).json({
            ok: false,
            msg: 'No existe la cuenta historica'
        });

        res.status(200).json({
            ok: true,
            historica
        })
    } catch (error) {
        console.error(error);
        res.status(500).sjon({
            ok: false,
            msg: 'No se pudo borrar la cuenta historica, Hable con el administrador'
        })
    }

};

const crearCuentaHistorica = async(req, res) => {
    const { fecha, cliente, tipoComprobante, numeroComprobante, debe, haber, saldo, observaciones, creadoPor } = req.body;

    try {
        const historica = new CuentaHistorica({
            fecha,
            cliente,
            tipoComprobante,
            numeroComprobante,
            debe,
            haber,
            saldo,
            observaciones,
            creadoPor
        });

        await historica.save();

        res.status(201).json({
            ok: true,
            historica
        });
    } catch (error) {
        console.error(error);;

        res.status(500).json({
            ok: false,
            msg: 'No se pudo cargar la historica, Por favor hable con el administrador'
        });
    }
    
};

const modifcarCuentaHistorica = async(req, res) => {
    const { id } = req.params;

    try {
        const historica = await CuentaHistorica.findByIdAndUpdate(id, req.body, { new: true });

        if(!historica) return res.status(404).json({
            ok: false,
            msg: 'No existe la historica'
        });

        res.status(200).json({
            ok: true,
            historica
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo modificar la historica, Por favor hable con el administrador'
        });
    }
}

const traerCuentaHistoricaPorCliente = async(req, res) => {
    const { cliente } = req.params;

    try {
        const historicas = await CuentaHistorica.find({ cliente })
            .populate('cliente', 'nombre');

        res.status(200).json({
            ok: true,
            historicas
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener la historica, Por favor hable con el administrador'
        });
    }
};

module.exports = {
    borrarCuentaHistorica,
    crearCuentaHistorica,
    modifcarCuentaHistorica,
    traerCuentaHistoricaPorCliente

};