const { Schema, model, Types } = require("mongoose");

const CuentaHistorica = new Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    codigoCliente: {
        type: Types.ObjectId,
        ref: 'Cliente'
    },
    tipoComprobante: {
        type: String,
        required: true,
        set: value => value.toUpperCase(),
        trim: true
    },
    numeroComprobante: {
        type: String,
        required: true,
        trim: true
    },
    debe: {
        type: Number,
        required: true
    },
    haber: {
        type: Number,
        default: 0
    },
    saldo: {
        type: Number,
        default: this.importe
    },
    observaciones: {
        type: String,
        set: value => value.toUpperCase(),
    },
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = model('CuentaHistorica', CuentaHistorica)