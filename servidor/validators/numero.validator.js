const { check } = require('express-validator');

const validarNumero = [
    check('tipo')
        .notEmpty().withMessage('El tipo es obligatorio')
        .isString().withMessage('El tipo debe ser un string'),
    check('puntoVenta')
        .notEmpty().withMessage('El punto de venta es obligatorio')
        .isNumeric().withMessage('El punto de venta debe ser un numero'),
    check('numero')
        .notEmpty().withMessage('El numero es obligatorio')
        .isNumeric().withMessage('El numero debe ser un numero'),
    check('prefijo')
        .optional()
        .isString().withMessage('El prefijo debe ser un string')
];


module.exports = {
    validarNumero
}