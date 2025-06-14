const { Schema, model, Types } = require("mongoose");

const Pedido = new Schema({

    fecha: {
        type: Date,
        default: Date.now
    },
    cliente: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    numero: {
        type: String,
        trim: true,
        required: true
    },
    codigoProducto: {
        type: Types.ObjectId,
        ref: 'Producto',
    },
    producto: {
        type: String,
        required: true,
        trim: true,
        set: value => value.toUpperCase()
    },
    cantidad: {
        type: Number,
        default: 0
    },
    telefono: {
        type: String,
        trim: true
    },
    stock: {
        type: Number,
        default: 0
    },
    estado: {
        type: String,
        default: 'Pendiente',
        enum: ['Pendiente', 'Entregado', 'Cancelado']
    },
    observaciones: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

module.exports = model('Pedido', Pedido);