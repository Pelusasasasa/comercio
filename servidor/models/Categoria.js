const { Schema } = require("mongoose");

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
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fechaAlta: {
        type: Date,
        default: Date.now()
    }
})