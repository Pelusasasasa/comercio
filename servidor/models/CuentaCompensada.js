const { Schema, model, Types } = require("mongoose");

const CuentaCompensada = new Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    cliente: {
        type: Types.ObjectId,
        ref: 'Cliente'
    },
    tipoComprobante: {
        type: String,
        required: true,
        trim: true
    },
    nro_comprobante: {
        type: String,
        required: true,
        trim: true
    },
    importe: {
        type: Number,
        required: true
    },
    pagado: {
        type: Number,
        default: 0
    },
    saldo: {
        type: Number,
        default: this.importe
    },
    observaciones: {
        type: String,
        required: true
    },
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = model('CuentaCompensada', CuentaCompensada)