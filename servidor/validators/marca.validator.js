const { check } = require('express-validator');


const validarMarca = [
    check('nombre')
        .isString().withMessage('El nombre debe ser un texto')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('descripcion')
        .optional()
        .isString().withMessage('La descripcion debe ser un texto'),
    check('activo')
        .optional()
        .isBoolean().withMessage('El estado debe ser un booleano'),
    check('logo')
        .optional()
        .isString().withMessage('El logo debe ser un texto')
];

module.exports = {
    validarMarca
}