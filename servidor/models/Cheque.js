import { model, Schema, Types } from 'mongoose'

const Cheque = new Schema({
  fechaRecibido: {
    type: Date,
    default: Date.now
  },
  numero: {
    type: String,
    requred: true,
    trim: true
  },
  banco: {
    type: String,
    requred: true,
    trim: true
  },
  importe: {
    type: Number,
    requred: true,
  },
  fechaDeposito: {
    type: Date,
    requred: true,
    trim: true
  },
  entregadoPor: {
    type: String,
    trim: true,
    set: value => value.toUpperCase()
  },
  entregadoA: {
    type: String,
    trim: true,
    set: value => value.toUpperCase()
  },
  domicilio:{
    type: String,
    trim: true,
    set: value => value.toUpperCase()
  },
  telefono: {
    type: String,
    trim: true,
    set: value => value.toUpperCase()
  },
  observaciones: {
    type: String,
    trim: true,
    set: value => value.toUpperCase()
  },
  creadoPor: {
    type: Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  tipoComprobante: {
    type: String,
    trim: true,
    set: value => value.toUpperCase()
  },
  esPropio: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Cheque', Cheque)
