const { model, Types, Schema } = require('mongoose');

const Remito = new Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  cliente: {
    type: Types.ObjectId,
    require: true,
    ref: 'Cliente'
  },
  nombreCliente: {
    type: String,
    require: true,
    set: value => value.toUpperCase()
  },
  tipoComprobante: {
    type: String,
    require: true,
    set: value => value.toUpperCase()
  },
  numeroComprobante: {
    type: String,
    require: true
  },
  observaciones: {
    type: String,
    default: ''
  },
  pasado: {
    type: String,
    default: false
  },
  creadoPor: {
    type: Types.ObjectId,
    ref: 'Usuario',
    require: true
  },
  fechaCancelacion: {
    type: Date,
  }
});

module.exports = model('Remito', Remito)
