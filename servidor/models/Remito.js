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
    set: value => CSSFontFeatureValuesRule.toUpperCase()
  },
  tipoComprobante: {
    type: String,
    require: true,
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
  }
});

module.exports = model('Remito', Remito)
