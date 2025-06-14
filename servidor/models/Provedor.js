const { Schema, model } = require("mongoose");

const Provedor = new Schema({
    codigo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        set: value => value.toUpperCase()
    },
    cuit: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    telefono: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
        email: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    direccion: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    localidad: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    provincia: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    condicionIva: {
        type: String,
        trim: true,
        enum: ['INSCRIPTO', 'MONOTRIBUTO', 'EXENTO', 'CONSUMIDOR FINAL', 'OTRO'],
        default: 'CONSUMIDOR FINAL',
        set: value => value.toUpperCase()
    },
    contacto: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    telefonoContacto: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    saldo: {
        type: Number,
        default: 0
    },
    fechaAlta: {
        type: Date,
        default: Date.now()
    },
    observaciones: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    activo: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Provedor', Provedor);