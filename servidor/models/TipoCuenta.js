const { Schema } = require("mongoose");
import { model } from 'mongoose';

const TipoCuenta = new Schema({

    nombre: {
        type: String,
        required: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    tipo: {
        type: String,
        required: true,
        enum: ['E', 'I'],
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    activo: {
        type: Boolean,
        default: true
    },
    fechaAlta: {
        type: Date,
        default: Date.now
    }

});


module.exports = model('TipoCuenta', TipoCuenta);