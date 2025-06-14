const { check } = require("express-validator");

const validarTarjeta = [
    check('tipoTarjeta')
        .isMongoId().withMessage('El tipoTarjeta debe ser un id valido')
        .notEmpty().withMessage('El tipoTarjeta es obligatorio'),
    check('cliente')
        .isString().withMessage('El cliente debe ser un string')
        .notEmpty().withMessage('El cliente es obligatorio'),
    check('numeroComprobante')
        .optional()
        .isString().withMessage('El numeroComprobante debe ser un string'),
    check('tipoComprobante')
        .optional()
        .isString().withMessage('El tipoComprobante debe ser un string'),
    check('importe')
        .isNumeric().withMessage('El importe debe ser un numero')
        .notEmpty().withMessage('El importe es obligatorio'),
    check('creadoPor')
        .isMongoId().withMessage('El creadoPor debe ser un id valido')
        .notEmpty().withMessage('El creadoPor es obligatorio'),
];

module.exports = {
    validarTarjeta
}