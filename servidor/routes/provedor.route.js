const { traerProvedores, crearProvedor, traerProvedorPorId, borrarProvedor, traerNombres, modificarProvedor } = require("../controllers/provedor.controllers");

const { Router } = require('express');
const { validarProvedor } = require("../validators/provedor.validator");
const validarCampos = require("../middlewares/validarCampos");

const router = Router();

router.route('/')
    .get(traerProvedores)
    .post(validarProvedor, validarCampos, crearProvedor)
router.route('/nombres')
    .get(traerNombres)
router.route('/:id')
    .delete(borrarProvedor)
    .get(traerProvedorPorId)
    .put(validarProvedor, validarCampos, modificarProvedor)


module.exports = router;