const { model, Schema, Types, models } = require('mongoose');

const Usuario = new Schema({
    codigo: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        set: value => value.toUpperCase()
    },
    permiso: {
        type: {},
        required: true,
        default: {
            cliente: true,
            producto: true,
            venta: true,
            usuario: true,
            movimientoStock: true,
            numero: true,
            reporte: true,
            configuracion: true
        }
    },
    activo: {
        type: Boolean,
        default: true
    },
    telefono: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario',
    }
});

module.exports = models.Usuario || model("Usuario", Usuario);