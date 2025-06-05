const { Schema, model } = require("mongoose");
import { model } from 'mongoose';

const Cliente = new Schema({

        codigo: {
            type: Number,
            required: true,
            unique: true
        },
        nombre: {
            type: String,
            required: true,
            trim: true,
            set: value => value.toUpperCase()
        },
        dni: {
            type: String,
            required: true,
            trim: true,
        },
        telefono: {
            type: String,
            required: true,
            trim: true
        },
        direccion: {
            type: String,
            required: true,
            trim: true,
            set: value => value.toUpperCase()
        },
        localidad: {
            type: String,
            required: true,
            trim: true,
            set: value => value.toUpperCase()
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        saldo: {
            type: Number,
            default: 0
        },
        condicionCuenta: {
            type: String,
            enum: ['CONTADO', 'CORRIENTE'],
            default: 'CONTADO'
        },
        condicionIva: {
            type: String,
            enum: ['RESPONSABLE INSCRIPTO', 'MONOTRIBUTO', 'EXENTO', 'CONSUMIDOR FINAL'],
            default: 'CONSUMIDOR FINAL'
        },
        fechaAlta:{
            type: Date,
            default: Date.now
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


module.exports = model("Cliente", Cliente);