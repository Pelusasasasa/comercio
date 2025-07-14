const CuentaHistorica = require("../models/CuentaHistorica");

const crearHistorica = async (data) => {
    const { codigoCliente, tipoComprobante, numeroComprobante, precio, observaciones, creadoPor } = data;
    try {
        const historica = {};
        historica.codigoCliente = codigoCliente;
        historica.tipoComprobante = tipoComprobante;
        historica.numeroComprobante = numeroComprobante;
        historica.debe = tipoComprobante === 'RECIBO' ? 0 : precio;
        historica.haber = tipoComprobante === 'RECIBO' ? precio : 0;
        historica.saldo = tipoComprobante === 'RECIBO' ? -precio : precio;
        historica.observaciones = observaciones || '';
        historica.creadoPor = creadoPor;

        await CuentaHistorica.create(historica);
        return {
            ok: true,
            historica
        }
    } catch (error) {
        console.log(error);
        throw new Error("Error al crear la cuenta histórica");
    }
}

module.exports = {
    crearHistorica
}