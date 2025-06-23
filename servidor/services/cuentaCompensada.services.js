const Cliente = require("../models/Cliente");
const CuentaCompensada = require("../models/CuentaCompensada");
const CuentaHistorica = require("../models/CuentaHistorica");
const MovimientoStock = require("../models/MovimientoStock");
const Producto = require("../models/Producto");

const actualizarCompensada = async (id, data) => {
    let total = 0;
    let saldoActual = 0;
    let historicaSaldo = 0;
    try {

        const compensada = await CuentaCompensada.findById(id);
        if (!compensada) {
            throw new Error("Cuenta compensada no encontrada");
        };  

        const historica = await CuentaHistorica.findOne({
            $and: [
                {numeroComprobante: compensada.numeroComprobante},
                {tipoComprobante: compensada.tipoComprobante},
            ]
        });
        if (!historica) {
            throw new Error("Cuenta historica no encontrada");
        };
        historicaSaldo = historica.saldo - compensada.saldo;

        const cliente = await Cliente.findOne({_id: compensada.cliente});
        if (!cliente) {
            throw new Error("Cliente no encontrado");
        };
        saldoActual = cliente.saldo - compensada.saldo;

        const movimientos = await MovimientoStock.find({numeroComprobante: compensada.numeroComprobante});
        if (!movimientos.length > 0) {
            throw new Error("No se puede actualizar la cuenta compensada porque no tiene Movimientos asociados");
        };
        
        for await (const movimiento of movimientos) {
            const producto = await Producto.findOne({_id: movimiento.producto});
            if(producto) {
                movimiento.precio = producto.precio;
                total += movimiento.cantidad * producto.precio;
                await movimiento.save();
            }else{
                total += movimiento.cantidad * movimiento.precio;
            };
        };

        compensada.importe = total;
        compensada.saldo = total - compensada.pagado;
        cliente.saldo = saldoActual + compensada.saldo;
        historica.saldo = historicaSaldo + compensada.saldo;

        await cliente.save();
        await compensada.save();

        if(historica.tipoComprobante === 'RECIBO'){
            historica.haber = compensada.importe;
        }else{
            historica.debe = compensada.importe;
        };
        historica.saldo = historicaSaldo + compensada.saldo;
        return compensada;

    }catch(error){
        console.log(error);
    }

};

module.exports = {
    actualizarCompensada
}