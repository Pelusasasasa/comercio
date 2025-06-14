const { Router } = require('express');
const { traerNumeros, crearNumero, borrarNumero, modificarNumero, traerNumeroPorTipo } = require('../controllers/numero.controllers');
const { validarNumero } = require('../validators/numero.validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();

router.route('/')
    .get(traerNumeros)
    .post(validarNumero, validarCampos, crearNumero)
router.route('/:id')
    .delete(borrarNumero)
    .put(validarNumero, validarCampos, modificarNumero)
router.route('/porTipo/:tipo')
    .get(traerNumeroPorTipo)

module.exports = router;