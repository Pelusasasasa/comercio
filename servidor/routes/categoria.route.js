const { Router } = require('express');
const { traerCategoriasActivas, crearCategoria, traerCategoriaPorId, modificarCategoria, eliminarcategoria, pausarCategoria } = require('../controllers/categoria.controllers');
const { validarCategoria } = require('../validators/categoria.validator');
const validarCampos = require('../middlewares/validarCampos');

const router = Router();

router.route('/')
    .get(traerCategoriasActivas)
    .post(validarCategoria, validarCampos, crearCategoria)
router.route('/:id')
    .get(traerCategoriaPorId)
    .put(validarCategoria, validarCampos, modificarCategoria)
    .delete(eliminarcategoria)
    .patch(pausarCategoria)

module.exports = router;