const { check } = require("express-validator");

const validarProvedor = [
    check('codigo')
        .isString().withMessage('El codigo debe ser un string')
        .notEmpty().withMessage('El codigo es obligatorio'),
    check('nombre')
        .isString().withMessage('El nombre debe ser un string')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('telefono')
        .isString().withMessage('El telefono debe ser un string')
        .notEmpty().withMessage('El telefono es obligatorio'),
    check('cuit')
        .optional()
        .isString().withMessage('La cuit debe ser un string'),
    check('telefono')
        .optional()
        .isString().withMessage('La telefono debe ser un string'),
    check('email')
        .optional()
        .isString().withMessage('La email debe ser un string'),
    check('direccion')
        .optional()
        .isString().withMessage('La direccion debe ser un string'),
    check('localidad')
        .optional()
        .isString().withMessage('La localidad debe ser un string'),
    check('provincia')
        .optional()
        .isString().withMessage('La provincia debe ser un string'),
    check('condicionIva')
        .optional()
        .isIn(['INSCRIPTO', 'MONOTRIBUTO', 'EXENTO', 'CONSUMIDOR FINAL']).withMessage('La direccion debe ser un string'),
    check('contacto')
        .optional()
        .isString().withMessage('El contacto debe ser un string'),
    check('telefonoContacto')
        .optional()
        .isString().withMessage('El telefono Contacto debe ser un string'),
    check('fechaAlta')
        .optional()
        .isDate().withMessage('La fecha de alta debe ser una fecha valida'),
    check('saldo')
        .optional()
        .isNumeric().withMessage('La provincia debe ser un numero'),
    check('observaciones')
        .optional()
        .isString().withMessage('La observaciones debe ser un string'),
    ];

module.exports = {
    validarProvedor
}