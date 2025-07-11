const { check } = require("express-validator");

const validarVenta = [
    check('codigoCliente')
        .isString().withMessage('El codigo de cliente tiene que ser un string')
        .notEmpty().withMessage('El codigo de cliente es obligatorio'),
    check('tipoComprobante')
        .isString().withMessage('El tipo de comprobante tiene que ser un string')
        .notEmpty().withMessage('El tipo de comprobante es obligatorio'),
    check('precio')
        .isNumeric().withMessage('El precio tiene que ser un numero')
        .notEmpty().withMessage('El precio es obligatorio'),
    check('factura')
        .isBoolean().withMessage('La factura tiene que ser un booleano')
        .notEmpty().withMessage('La factura es obligatoria'),
];

module.exports = {validarVenta}