const { Router } = require('express');
const { cargarVariable, obtenerVariables, obtenerVariablePorId, eliminarVariable, modificarVariable, obtenerVariablePorClave } = require('../controllers/variable.controllers');
const validarCampos = require('../middlewares/validarCampos');
const { validarVariable } = require('../validators/variable.validator');
const router = Router();

router.route('/')
    .get(obtenerVariables)
    .post(validarCampos, validarVariable ,cargarVariable)
router.route('/:id')
    .delete(eliminarVariable)
    .get(obtenerVariablePorId)
    .put(validarCampos, validarVariable, modificarVariable)
router.route('/clave/:clave')
    .get(obtenerVariablePorClave);

module.exports = router;