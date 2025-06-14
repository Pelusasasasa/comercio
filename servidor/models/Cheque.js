const { model, Schema, Types } = require ('mongoose');

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
    required: true,
    trim: true,
    set: value => value.toUpperCase()
  },
  importe: {
    type: Number,
    required: true,
  },
  fechaDeposito: {
    type: Date,
    required: true,
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
});

module.exports = model('Cheque', Cheque)
