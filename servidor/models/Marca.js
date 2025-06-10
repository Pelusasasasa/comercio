const {Schema, model} = require('mongoose');

const Marca = new Schema({
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
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    logo: {
        type: String,
        trim: true,
    }
});


module.exports = model('Marca', Marca);