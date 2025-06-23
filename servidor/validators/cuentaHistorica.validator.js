const { check } = require('express-validator');

const validarCuentaHistorica = [
    check('cliente')
        .isMongoId().withMessage('El Cliente dee ser un id'),
    check('tipoComprobante')
        .isString().withMessage('El tipo de comprobante debe ser un texto'),
    check('numeroComprobante')
        .isString().withMessage('El numero de comprobante debe ser un texto'),
    check('debe')
        .isNumeric().withMessage('El debe debe ser un numero'),
    check('haber')
        .isNumeric().withMessage('El haber debe ser un numero'),
    check('saldo')
        .isNumeric().withMessage('El saldo debe ser un numero'),
    check('observaciones')
        .optional()
        .isString().withMessage('Las observaciones debe ser un texto'),
    check('creadoPor')
        .isMongoId().withMessage('El usuario debe ser un id')
];

module.exports = {
    validarCuentaHistorica
}