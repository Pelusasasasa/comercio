const {Router} = require('express');
const { traerTipoCuentas, cargarTipoCuenta, traerNombres, modificarTipoCuenta, borrarTipoCuenta, traerTipoCuentaPorId } = require('../controllers/tipoCuenta.controllers');
const router = Router();

router.route('/')
    .get(traerTipoCuentas)
    .post(cargarTipoCuenta);
router.route('/nombres')
    .get(traerNombres)
router.route('/:id')
    .delete(borrarTipoCuenta)
    .get(traerTipoCuentaPorId)
    .put(modificarTipoCuenta)

module.exports = router;