const { model } = require("mongoose");

const TipoTarjeta = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    tipo: {
        type: String,
        required: true,
        enum: ['CREDITO', 'DEBITO'],
        trim: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    observaciones: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    }
});

module.exports = model('TipoTarjeta', TipoTarjeta)