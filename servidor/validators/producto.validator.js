const { check } = require("express-validator");
const { default: mongoose } = require("mongoose");

const validarProducto = [
    check('codigo')
        .isString().withMessage('El codigo debe ser un string')
        .notEmpty().withMessage('El codigo es obligatorio'),
    check('codigoFabrica')
        .optional()
        .isString().withMessage('El nombre debe ser un string'),
    check('descripcion')
        .isString().withMessage('La descripcion debe ser un string')
        .notEmpty().withMessage('La descripcion es obligatoria'),
    check('marca')
        .optional()
        .customSanitizer(value => value === '' ? null : value)
        .custom(value => {
            if (value === '' || value === null) return true;
            return mongoose.Types.ObjectId.isValid(value);
        })
        .withMessage('El marca debe ser un id valido'),
    check('provedor')
        .optional()
        .customSanitizer(value => value === '' ? null : value)
        .custom(value => {
            if (value === '' || value === null) return true;
            return mongoose.Types.ObjectId.isValid(value);
        })
        .withMessage('El Provedor debe ser un id valido'),
        check('costo')
        .isNumeric().withMessage('El costo debe ser un numero')
        .notEmpty().withMessage('El costo es obligatorio'),
    check('precio')
        .isNumeric().withMessage('El precio debe ser un numero')
        .notEmpty().withMessage('El precio es obligatorio'),
    check('iva')
        .isNumeric().withMessage('El iva debe ser un numero')
        .notEmpty().withMessage('El iva es obligatorio'),
    check('utilidad')
        .isNumeric().withMessage('El utilidad debe ser un numero')
        .notEmpty().withMessage('El utilidad es obligatorio'),
    check('stock')
        .isNumeric().withMessage('El stock debe ser un numero')
        .notEmpty().withMessage('El stock es obligatorio'),
    check('stockMinimo')
        .isNumeric().withMessage('El stockMinimo debe ser un numero')
        .notEmpty().withMessage('El stockMinimo es obligatorio'),
    check('categoria')
    .optional()
    .customSanitizer(value => value === '' ? null : value)
    .custom(value => {
        if (value === '' || value === null) return true;
        return mongoose.Types.ObjectId.isValid(value);
    })
    .withMessage('La categoria debe ser un id valido'),
    check('unidadMedida')
    .optional()
    .customSanitizer(value => value === '' ? null : value)
    .custom(value => {
        if (value === '' || value === null) return true;
        return mongoose.Types.ObjectId.isValid(value);
    })
    .withMessage('La Unidad de Medida debe ser un id valido'),
        
];

module.exports = {
    validarProducto
}