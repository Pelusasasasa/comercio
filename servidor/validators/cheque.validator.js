const { check } = require('express-validator');

const validarCheque = [
    check('numero')
        .notEmpty().withMessage('El número de cheque es obligatorio')
        .isNumeric().withMessage('El número de cheque debe ser un número'),
    check('banco')
        .notEmpty().withMessage('El banco es obligatorio')
        .isString().withMessage('El banco debe ser un texto'),
    check('importe')
        .notEmpty().withMessage('El importe es obligatorio')
        .isNumeric().withMessage('El importe debe ser un número'),
    check('fechaDeposito')
        .notEmpty().withMessage('La fechaDeposito es obligatoria')
        .isDate().withMessage('La fechaDeposito debe ser una fecha válida'),
    check('entregadoPor')
        .optional()
        .isString().withMessage('El cliente que lo entrego debe ser un texto'),
    check('entregadoA')
        .optional()
        .isString().withMessage('El cliente al que se lo va a entregar debe ser un texto'),
    check('domicilio')
        .optional()
        .isString().withMessage('El domicilio del cliente debe ser un texto'),
    check('telefono')
        .optional()
        .isString().withMessage('El telefono debe ser un texto'),
    check('observaciones')
        .optional()
        .isString().withMessage('Las observaciones debe ser un texto'),
    check('creadoPor')
        .isMongoId().withMessage('El usuario debe ser un id'),
    check('tipoComprobante')
        .optional()
        .isString().withMessage('El tipo de comprobante debe ser un texto'),
    check('esPropio')
        .optional()
        .isBoolean().withMessage('El esPropio debe ser un valor booleano')
]

module.exports = {
    validarCheque
}