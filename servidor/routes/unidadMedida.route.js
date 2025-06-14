const { Router } = require('express');
const { traerUnidadesMedida, crearUnindadMedida, traerUnidadesMedidaPorId, borrarUnidadMedidad, modificarUnidadMedida, pausarUnidadMedida } = require('../controllers/unidadMedida.controllers');
const { validarUnidadMedida } = require('../validators/unidadMedida.validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();

router.route('/')
    .get(traerUnidadesMedida)
    .post(validarUnidadMedida, validarCampos, crearUnindadMedida)
router.route('/:id')
    .delete(borrarUnidadMedidad)
    .get(traerUnidadesMedidaPorId)
    .patch(pausarUnidadMedida)
    .put(validarUnidadMedida, validarCampos, modificarUnidadMedida)


module.exports = router;