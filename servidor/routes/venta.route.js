const { Router } = require('express');
const { agregarVenta, traerVentas, traerVentaPorId, modificarVenta, borrarVenta } = require('../controllers/venta.controllers');
const validarCampos = require('../middlewares/validarCampos');
const { validarVenta } = require('../validators/venta.validator');
const router = Router();

router.route('/')
    .get(traerVentas)
    .post(validarVenta, validarCampos ,agregarVenta)
router.route('/:id')
    .delete(borrarVenta)
    .get(traerVentaPorId)
    .put(validarVenta, validarCampos, modificarVenta)
module.exports = router;