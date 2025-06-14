const { check } = require('express-validator');

const validarPedido = [
    check('cliente')
        .isString().withMessage('El cliente debe ser un string')
        .notEmpty().withMessage('El cliente es obligatorio'),
    check('numero')
        .isString().withMessage('El numero debe ser un string')
        .notEmpty().withMessage('El cliente es obligatorio'),
    check('estado')
        .isString().withMessage('El estado debe ser un string'),
    check('codigoProducto')
        .optional()
        .isMongoId().withMessage('El codigoProducto debe ser un id valido'),
    check('producto')
        .isString().withMessage('El producto ebe ser un string')
        .notEmpty().withMessage('El producto es obligatorio'),
    check('cantidad')
        .optional()
        .isNumeric().withMessage('La cantidad debe ser un numero'),
    check('telefono')
        .optional()
        .isString().withMessage('La telefono debe ser un numero'),
    check('stock')
        .optional()
        .isNumeric().withMessage('El stock debe ser un numero'),
    check('estado')
        .isIn(['pendiente', 'entregado', 'cancelado']).withMessage('El estado debe ser pendiente, entregado o cancelado'),
    check('observaciones')
        .optional()
        .isString().withMessage('Las observaciones deben ser un string'),
    check('creadoPor')
        .isMongoId().withMessage('El creadoPor debe ser un id valido')
        .notEmpty().withMessage('El creadoPor es obligatorio')
];


module.exports = {
    validarPedido
}