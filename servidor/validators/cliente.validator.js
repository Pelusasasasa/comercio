const { check } = require('express-validator');


const validarCliente = [
    check('codigo')
        .isInt({ min: 1 }).withMessage('El código debe ser un número entero mayor que 0'),
    check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('dni')
        .optional()
        .isLength({ min: 8, max: 11}).withMessage('la longitud del dni esta mal')
        .isString().withMessage('El DNI debe ser un texto'),
    check('telefono')
        .optional()
        .isString().withMessage('El teléfono debe ser un texto'),
    check('direccion')
        .optional()
        .isString().withMessage('La dirección debe ser un texto'),
    check('localidad')
    .optional()
        .isString().withMessage('La localidad debe ser un texto'),
    check('email')
        .optional()
        .isEmail().withMessage('Debe ser un email válido'),
    check('saldo')
        .optional()
        .isFloat({ min: 0 }).withMessage('El saldo no puede ser negativo'),
    check('condicionCuenta')
        .optional()
        .isIn(['CONTADO', 'CORRIENTE']).withMessage('Condición de cuenta inválida'),
    check('condicionIva')
        .optional()
        .isIn(['RESPONSABLE INSCRIPTO', 'MONOTRIBUTO', 'EXENTO', 'CONSUMIDOR FINAL'])
        .withMessage('Condición de IVA inválida')
];

module.exports = {
    validarCliente
}