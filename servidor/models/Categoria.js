const { Schema, model } = require("mongoose");
const moment = require('moment-timezone');

const Categoria = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        set: value => value.toUpperCase()
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
    fechaCreacion:{
        type: Date,
        default: () => moment().tz('America/Argentina/Buenos_Aires').toDate()
    }
});


module.exports = model('Categoria', Categoria);