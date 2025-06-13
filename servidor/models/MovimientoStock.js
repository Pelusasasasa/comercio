const { Schema, model, Types } = require("mongoose");

const MovimientoStock = new Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    producto: {
        type: Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    tipo: {
        type: String,
        required: true,
        set: value => value.toUpperCase()
    },
    cantidad: {
        type: Number,
        required: true
    },
    stockAntes:{ 
        type: Number,
        required: true
    },
    stockAhora: {
        type: Number,
        required: true
    },
    detalle: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    numeroComprobante: {
        type: String,
        required: true,
        trim: true,
        set: value => value.toUpperCase()
    },
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
    

});


module.exports = model("MovimientoStock", MovimientoStock);