const { Router } = require('express');
const { crearMovimientoStock, borrarMovimientos, modificarMovimiento, traerMovimientosPorProducto, traerMovimientosPorTipoYNumero } = require('../controllers/movimientoStock.controllers');
const router = Router();


router.route('')
    .post(crearMovimientoStock)
router.route('/:id')
    .delete(borrarMovimientos)
    .put(modificarMovimiento)
router.route('/producto/:producto')
    .get(traerMovimientosPorProducto)
router.route('/porTipoYNumero/:tipo/:numeroComprobante')
    .get(traerMovimientosPorTipoYNumero)

module.exports = router;