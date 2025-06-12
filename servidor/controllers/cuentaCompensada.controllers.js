const CuentaCompensada = require('../models/CuentaCompensada');

const borrarCuentaCompensada = async(req, res) => {
    const { id } = req.params;
    try {
        const cuenta = await CuentaCompensada.findByIdAndDelete(id);
        
        if(!cuenta) return res.status(404).json({
            ok: false,
            msg: 'No se encontro la cuenta'
        });

        res.status(200).json({
            ok: true,
            cuenta
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};

const crearCuentaCompensada = async(req, res) => {
    const {fecha, cliente, tipoComprobante, numeroComprobante, importe, pagado, saldo, observaciones, creadoPor} = req.body;
    try {

        const cuenta = new CuentaCompensada({
            fecha,
            cliente,
            tipoComprobante,
            numeroComprobante,
            importe,
            pagado,
            saldo,
            observaciones,
            creadoPor
        });

        await cuenta.save();

        res.status(201).json({
            ok: true,
            cuenta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo cargar la cuenta Compensada, hable con el administrador'
        })
    }
};

const modificarCuentaCompensada = async(req, res) => {
    const { id } = req.params;

    try {
        const cuenta = await CuentaCompensada.findByIdAndUpdate(id, req.body, { new: true})

        if(!cuenta) return res.status(404).json({
            ok: false,
            msg: 'No existe esa cuenta'
        });

        res.status(200).json({
            ok: true,
            cuenta
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se puedo modificar la cuenta compensada, hable con el administrador'
        })
    }
};

const traerCuentaCompensadaActivaPorCliente = async(req, res) => {
    const  { cliente } = req.params;
    try {
        const cuentas = await CuentaCompensada.find({
            $and: [
                {cliente},
                {saldo: {$ne: 0}}
            ]
        });

        if(!cuentas) return res.status(404).json({
            ok: false,
            msg: 'No tiene cuentas el cliente'
        });

        res.status(200).json({
            ok: true,
            cuentas
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se puedo obtener las cuentasCompnsadas, hable con el adminstrador'
        })
    }
};

module.exports = {
    borrarCuentaCompensada,
    crearCuentaCompensada,
    modificarCuentaCompensada,
    traerCuentaCompensadaActivaPorCliente
};