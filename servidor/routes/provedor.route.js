const { traerProvedores, crearProvedor, traerProvedorPorId, borrarProvedor, traerNombres, modificarProvedor } = require("../controllers/provedor.controllers");

const { Router } = require('express');

const router = Router();

router.route('/')
    .get(traerProvedores)
    .post(crearProvedor)
router.route('/nombres')
    .get(traerNombres)
router.route('/:id')
    .delete(borrarProvedor)
    .get(traerProvedorPorId)
    .put(modificarProvedor)


module.exports = router;