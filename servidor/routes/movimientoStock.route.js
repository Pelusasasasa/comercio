const { Router } = require('express');
const { crearMovimientoStock, borrarMovimientos, modificarMovimiento, traerMovimientosPorProducto, traerMovimientosPorTipoYNumero, traerMovimientos } = require('../controllers/movimientoStock.controllers');
const { validarMovimientoStock } = require('../validators/movimientoStock.validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();


router.route('')
    .get(traerMovimientos)
    .post(validarMovimientoStock, validarCampos, crearMovimientoStock)
router.route('/:id')
    .delete(borrarMovimientos)
    .put(validarMovimientoStock, validarCampos, modificarMovimiento)
router.route('/producto/:producto')
    .get(traerMovimientosPorProducto)
router.route('/porTipoYNumero/:tipo/:numeroComprobante')
    .get(traerMovimientosPorTipoYNumero)

module.exports = router;