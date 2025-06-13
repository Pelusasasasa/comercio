const { model, Schema, Types } = require('mongoose');
const Tarjeta = new Schema({

    fecha: {
        type: Date,
        default: Date.now
    },
    tipoTarjeta: {
        type: Types.ObjectId,
        ref: 'TipoTarjeta',
        required: true
    },
    cliente: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    numeroComprobante: {
        type: String,
        trim: true,
    },
    tipoComprobante: {
        type: String,
        trim: true,
    },
    importe: {
        type: Number,
        required: true
    },
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    cuotas: {
        type: Number,
        default: 0
    },
    recargo: {
        type: Number,
        default: 0
    }
});


module.exports = model('Tarjeta', Tarjeta);