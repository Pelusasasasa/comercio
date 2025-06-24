const { Router } = require('express');
const { crearRecibo, traerRecibos, borrarRecibo, modificarRecibo, traerReciboPorId } = require('../controllers/recibo.controllers');
const router = Router();

router.route('/')
    .get(traerRecibos)
    .post(crearRecibo)
router.route('/:id')
    .delete(borrarRecibo)
    .get(traerReciboPorId)
    .put(modificarRecibo)
    
module.exports = router;