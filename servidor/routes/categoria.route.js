const { Router } = require('express');
const { traerCategoriasActivas, crearCategoria, traerCategoriaPorId, modificarCategoria, eliminarcategoria, pausarCategoria } = require('../controllers/categoria.controllers');

const router = Router();

router.route('/')
    .get(traerCategoriasActivas)
    .post(crearCategoria)
router.route('/:id')
    .get(traerCategoriaPorId)
    .put(modificarCategoria)
    .delete(eliminarcategoria)
    .patch(pausarCategoria)

module.exports = router;