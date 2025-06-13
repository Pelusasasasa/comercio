const { traerUsuarios, crearUsuario, modificarUsuario, borrarUsuario, pausarUsuario } = require("../controllers/usuario.controllers");

const { Router } = require('express');
const router = Router();

router.route('/')
    .get(traerUsuarios)
    .post(crearUsuario)
router.route('/:id')
    .delete(borrarUsuario)
    .get(traerUsuarios)
    .patch(pausarUsuario)
    .put(modificarUsuario)



module.exports = router;