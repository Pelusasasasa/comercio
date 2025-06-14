const { traerUsuarios, crearUsuario, modificarUsuario, borrarUsuario, pausarUsuario } = require("../controllers/usuario.controllers");

const { Router } = require('express');
const { validarUsuario } = require("../validators/Usuario.validator");
const validarCampos = require("../middlewares/validarCampos");
const router = Router();

router.route('/')
    .get(traerUsuarios)
    .post(validarUsuario, validarCampos, crearUsuario)
router.route('/:id')
    .delete(borrarUsuario)
    .get(traerUsuarios)
    .patch(pausarUsuario)
    .put(validarUsuario, validarCampos, modificarUsuario)



module.exports = router;