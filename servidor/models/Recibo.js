const { Schema, model } = require("mongoose");

const Recibo = new Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },
    numeroComprobante: {
        type: String,
        required: true,
        unique: true
    },
    importe: {
        type: Number,
        required: true
    },
    observaciones: {
        type: String,
        default: ""
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    medioPago: {
        type: String,
        required: true,
        enum: ["EFECTIVO", "TRANSFERENCIA", "TARJETA", "CHEQUE", "OTRO"]
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = model("Recibo", Recibo);