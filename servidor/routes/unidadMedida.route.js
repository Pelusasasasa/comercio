const { Router } = require('express');
const { traerUnidadesMedida, crearUnindadMedida, traerUnidadesMedidaPorId, borrarUnidadMedidad, modificarUnidadMedida, pausarUnidadMedida } = require('../controllers/unidadMedida.controllers');
const router = Router();

router.route('/')
    .get(traerUnidadesMedida)
    .post(crearUnindadMedida)
router.route('/:id')
    .delete(borrarUnidadMedidad)
    .get(traerUnidadesMedidaPorId)
    .patch(pausarUnidadMedida)
    .put(modificarUnidadMedida)


module.exports = router;