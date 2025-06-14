const { check } = require("express-validator");

const validarUnidadMedida = [
    check('nombre')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('abreviatura')
        .isString().withMessage('La abreviatura debe ser un string')
        .optional(),
    check('permiteDecimal')
        .isBoolean().withMessage('El permite decimal debe ser un booleano')
        .optional(),
    check('tipo')
        .isString().withMessage('El tipo debe ser un string')
        .optional(),
    check('activo')
        .isBoolean().withMessage('El activo debe ser un booleano')
        .optional(),
];

module.exports = {
    validarUnidadMedida
}