import { model } from 'mongoose'
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
            reporte: true,
            configuracion: true
        }
    },
    activo: {
        type: Boolean,
        default: true
    },
    creadoPor: {
        type: Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = model("Usuario", Usuario);