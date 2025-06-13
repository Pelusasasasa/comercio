const { Router } = require('express');
const { traerTarjetas, crearTarjeta, borrarTarjeta, traerTarjetaPorId, modificarTarjeta } = require('../controllers/tarjeta.controllers');
const router = Router();

router.route('/')
    .get(traerTarjetas)
    .post(crearTarjeta)
router.route('/:id')
    .delete(borrarTarjeta)
    .get(traerTarjetaPorId)
    .put(modificarTarjeta)
    

module.exports = router;