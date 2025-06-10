const { Schema } = require("mongoose");
import { model } from 'mongoose';

const Numero = new Schema({
    tipo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    puntoVenta: {
        type: number,
        required: true,
    },
    numero: {
        type: Number,
        default: 0
    },
    prefijo: {
        type: String,
        trim: true,
        default: '',
        set: value => value.toUpperCase()
    }
});

module.exports = model('Numero', Numero);