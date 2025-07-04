const { model, Types, Schema } = require('mongoose');

const Remito = new Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  codigoCliente: {
    type: Types.ObjectId,
    require: true,
    ref: 'Cliente'
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
