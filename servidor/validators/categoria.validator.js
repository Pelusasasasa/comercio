const { check } = require('express-validator');

const validarCategoria = [
    check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser un texto')
        .isLength({min: 3, max:50}).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
    check('descripcion')
        .optional()
        .isString().withMessage('La descripción debe ser un texto'),
    check('activo')
        .optional()
        .isBoolean().withMessage('El estado debe ser un valor booleano')
]

module.exports = {
    validarCategoria
}