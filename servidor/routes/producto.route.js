const { Router } = require('express');
const { traerProductos, crearProducto, traerProductoPorId, modificarProducto, borrarProducto, traerProductosPorBusqueda } = require('../controllers/producto.controllers');
const validarCampos = require('../middlewares/validarCampos');
const { validarProducto } = require('../validators/producto.validator');
const router = Router();

router.route('/')
    .get(traerProductos)
    .post(validarProducto, validarCampos, crearProducto)
router.route('/busqueda/:text')
    .get(traerProductosPorBusqueda)
router.route('/:id')
    .delete(borrarProducto)
    .get(traerProductoPorId)
    .put(validarProducto, validarCampos, modificarProducto)

module.exports = router;