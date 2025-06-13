const { Schema, model } = require("mongoose");

const UnidadMedida = new Schema({

    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    abreviatura: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    permiteDecimal: {
        type: Boolean,
        default: false
    },
    tipo: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    activo: {
        type: Boolean,
        default: true
    },

});

module.exports = model('UnidadMedida', UnidadMedida);