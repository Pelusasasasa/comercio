const { traerTipoTarjeta, traerTipoTarjetas, crearTipoTarjeta, modificarTipoTarjeta, pausarTipoTarjeta, borrarTipoTarjeta, traerNombres } = require("../controllers/tipoTarjeta.controllers");

const { Router } = require('express');
const router = Router();

router.route('/')
    .get(traerTipoTarjetas)
    .post(crearTipoTarjeta);
router.route('/nombres')
    .get(traerNombres)
router.route('/:id')
    .delete(borrarTipoTarjeta)
    .get(traerTipoTarjeta)
    .patch(pausarTipoTarjeta)
    .put(modificarTipoTarjeta)

module.exports = router;