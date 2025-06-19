const { check } = require('express-validator');

const validarMovimientoStock  = [
    check('producto')
        .isMongoId().withMessage('El producto debe ser un id')
        .notEmpty().withMessage('El producto es obligatorio'),
    check('tipo')
        .isString().withMessage('El tipo debe ser un string')
        .notEmpty().withMessage('El tipo es obligatorio'),
    check('cantidad')
        .isNumeric().withMessage('La cantidad debe ser un número')
        .notEmpty().withMessage('La cantidad es obligatoria'),
    check('stockAntes')
        .isNumeric().withMessage('El stock anterior debe ser un numero')
        .notEmpty().withMessage('El stock anterior es obligatorio'),
    check('stockAhora')
        .isNumeric().withMessage('El stock actual debe ser un numero')
        .notEmpty().withMessage('El stock actual es obligatorio'),
    check('detalle')
        .optional()
        .isString().withMessage('El detalle debe ser un string'),
    check('numeroComprobante')
        .isString().withMessage('El numeroComprobante debe ser un string')
        .notEmpty().withMessage('El numeroComprobante es obligatorio'),
    check('creadoPor')
        .isMongoId().withMessage('El creadoPor debe ser un id')
        .notEmpty().withMessage('El creadoPor es obligatorio')
    
];


module.exports = {
    validarMovimientoStock
}