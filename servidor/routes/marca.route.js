const { Router } = require('express');
const { traerMarcas, cargarMarca, borrarMarca, traerMarcasActivas, cambiarActivoMarca, modificarMarca } = require('../controllers/marca.controllers');
const validarCampos = require('../middlewares/validarCampos');
const { validarMarca } = require('../validators/marca.validator');
const router = Router();

router.route('/')
    .get(traerMarcas)
    .post(validarMarca, validarCampos, cargarMarca)
router.route('/:id')
    .delete(borrarMarca)
    .put(validarMarca, validarCampos, modificarMarca)
    .patch(cambiarActivoMarca)
router.route('/activo')
    .get(traerMarcasActivas)

module.exports = router;