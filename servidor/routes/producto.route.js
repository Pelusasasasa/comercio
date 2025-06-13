const { Router } = require('express');
const { traerProductos, crearProducto, traerProductoPorId, modificarProducto, borrarProducto } = require('../controllers/producto.controllers');
const router = Router();

router.route('/')
    .get(traerProductos)
    .post(crearProducto)
router.route('/:id')
    .delete(borrarProducto)
    .get(traerProductoPorId)
    .put(modificarProducto)

module.exports = router;