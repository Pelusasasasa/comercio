const { check } = require("express-validator");

const validarTipoCuenta = [
    check('nombre')
        .isLength({ min: 3 }).withMessage('El nombre de la cuenta debe tener al menos 3 caracteres')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('tipo')
        .isIn(['E', 'I']).withMessage('El tipo debe ser ingreso o egreso')
        .notEmpty().withMessage('El tipo es obligatorio'),
    check('descripcion')
        .isString().withMessage('La descripcion debe ser un string')
        .notEmpty().withMessage('La descripcion es obligatorio'),
    check('activo')
        .isBoolean().withMessage('El estado debe ser un booleano'),
    check('fechaAlta')
        .isDate().withMessage('La fecha de alta debe ser una fecha valida')
];



module.exports = {
    validarTipoCuenta
}