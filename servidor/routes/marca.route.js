const { Router } = require('express');
const { traerMarcas, cargarMarca, borrarMarca, traerMarcasActivas, cambiarActivoMarca, modificarMarca } = require('../controllers/marca.controllers');
const router = Router();

router.route('/')
    .get(traerMarcas)
    .post(cargarMarca)
router.route('/:id')
    .delete(borrarMarca)
    .put(modificarMarca)
    .patch(cambiarActivoMarca)
router.route('/activo')
    .get(traerMarcasActivas)

module.exports = router;