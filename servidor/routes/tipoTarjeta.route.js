const { traerTipoTarjeta, traerTipoTarjetas, crearTipoTarjeta, modificarTipoTarjeta, pausarTipoTarjeta, borrarTipoTarjeta, traerNombres } = require("../controllers/tipoTarjeta.controllers");

const { Router } = require('express');
const { validarTipoTarjeta } = require("../validators/tipoTarjeta.validator");
const validarCampos = require("../middlewares/validarCampos");
const router = Router();

router.route('/')
    .get(traerTipoTarjetas)
    .post(validarTipoTarjeta, validarCampos, crearTipoTarjeta);
router.route('/nombres')
    .get(traerNombres)
router.route('/:id')
    .delete(borrarTipoTarjeta)
    .get(traerTipoTarjeta)
    .patch(pausarTipoTarjeta)
    .put(validarTipoTarjeta, validarCampos, modificarTipoTarjeta)

module.exports = router;