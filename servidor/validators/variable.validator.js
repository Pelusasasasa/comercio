const { check } = require("express-validator");

const validarVariable = [
    check('clave')
        .isString().withMessage('La clave debe ser un string')
        .notEmpty().withMessage('La clave es obligatoria'),
    check('valor')
        .notEmpty().withMessage('El valor es obligatorio')
];

module.exports = {
    validarVariable
};