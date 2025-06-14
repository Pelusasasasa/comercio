const { check } = require("express-validator");

const validarUsuario = [
    check('codigo')
        .isString().withMessage('El codigo debe ser un string')
        .notEmpty().withMessage('El codigo es obligatorio'),
    check('nombre')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('permiso')
        .isObject().withMessage('El permiso debe ser un objeto')
        .notEmpty().withMessage('El permiso es obligatorio'),
    check('activo')
        .isBoolean().withMessage('El activo debe ser un booleano')
        .notEmpty().withMessage('El activo es obligatorio'),
    check('creadoPor')
        .isMongoId().withMessage('El creadoPor debe ser un id valido')
        .optional()
];

module.exports = {
    validarUsuario
}