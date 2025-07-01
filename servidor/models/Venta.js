const { Schema, model, Types } = require("mongoose");

const Venta = new Schema({

    fecha: {
        type: Date,
        default: Date.now
    },
    codigoCliente: {
        type: Types.ObjectId,
        required: true,
        trim: true,
    },
    datosClientes: {
        nombre: String,
        direccion: String,
        telefono: String,
        dni: String,
        condicionIva: {
            type: String,
            enum: ['CONSUMIDOR FINAL', 'INSCRIPTO', 'MONOTRIBUTO', 'EXENTO'],
            default: 'CONSUMIDOR FINAL'
        }
    },
    tipoCliente: {
        type: String,
        default: 'NORMAL',
        enum: ['NORMAL', 'INSTALADOR']
    },
    precio: {
        type: Number,
        required: true,
    },
    tipoComprobante: {
        type: String,
        trim: true,
        required: true
    },
    numeroComprobante: {
        type: String,
        trim: true,
        required: true
    },
    observaciones: {
        type: String,
        trim: true,
        set: value => value.toUpperCase()
    },
    descuento: {
        type: Number,
        default: 0
    },
    factura: {
        type: Boolean,
        required: true,
    }
    

});


module.exports = model('Venta', Venta);