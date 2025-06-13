const { Router } = require('express');
const { traerNumeros, crearNumero, borrarNumero, modificarNumero, traerNumeroPorTipo } = require('../controllers/numero.controllers');
const router = Router();

router.route('/')
    .get(traerNumeros)
    .post(crearNumero)
router.route('/:id')
    .delete(borrarNumero)
    .put(modificarNumero)
router.route('/porTipo/:tipo')
    .get(traerNumeroPorTipo)

module.exports = router;