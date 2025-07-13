const { Schema, model, Types } = require('mongoose');


const Variable = new Schema({
    clave: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        set: (v) => v.toUpperCase()
    },
    valor: {
        type: Schema.Types.Mixed,
        required: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    actualizado: {
        type: Date,
        default: Date.now
    }
});


module.exports = model('Variable', Variable);