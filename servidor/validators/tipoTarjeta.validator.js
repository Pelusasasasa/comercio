const { check } = require("express-validator");

const validarTipoTarjeta = [
    check('nombre')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('tipo')
        .isIn(['CREDITO', 'DEBITO']).withMessage('el tipo debe ser CREDITO O DEBITO')
        .notEmpty().withMessage('La tipo es obligatoria'),
    check('activo')
        .isBoolean().withMessage('El activo debe ser un booleano')
        .notEmpty().withMessage('El activo es obligatorio'),
    check('observaciones')
        .optional()
        .isString().withMessage('La observaciones debe ser un string')
];

module.exports = {
    validarTipoTarjeta
}