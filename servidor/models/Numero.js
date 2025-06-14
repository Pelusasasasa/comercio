const { Schema, model } = require("mongoose");

const Numero = new Schema({
    tipo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    puntoVenta: {
        type: Number,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    prefijo: {
        type: String,
        trim: true,
        default: '',
        set: value => value.toUpperCase()
    }
});

module.exports = model('Numero', Numero);