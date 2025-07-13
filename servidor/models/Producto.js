const { Types, Schema, model } = require("mongoose");

const Producto = new Schema({

    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        set: value => value.toUpperCase()
    },
    codigoFabrica: {
        type: String,
        default: '',
        trim: true,
        set: value => value.toUpperCase()
    },
    descripcion:{
        type: String,
        required: true,
        trim: true,
        set: value => value.toUpperCase()
    },
    marca:{
        type: Types.ObjectId,
        ref: 'Marca',
    },
    provedor: {
        type: Types.ObjectId,
        ref: 'Provedor'
    },
    costo: {
        type: Number,
        default: 0
    },
    costoDolar: {
        type: Number,
        default: 0
    },
    iva: {
        type: Number,
        default: 0
    },
    utilidad: {
        type: Number,
        default: 0
    },
    precio: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    stockMinimo: {
        type: Number,
        default: 0
    },
    detalle: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    activo: {
        type: Boolean,
        default: true
    },
    categoria: {
        type: Types.ObjectId,
        ref: 'Categoria'
    },
    unidadMedida: {
        type: Types.ObjectId,
        ref: 'UnidadMedida'
    },
    fotoURl: {
        type: String,
        default: ''
    },
    fechaAlta: {
        type: Date,
        default: Date.now()
    }

});


module.exports = model('Producto', Producto);