const {Router} = require('express');
const { traerTipoCuentas, cargarTipoCuenta, traerNombres, modificarTipoCuenta, borrarTipoCuenta, traerTipoCuentaPorId } = require('../controllers/tipoCuenta.controllers');
const { validarTipoCuenta } = require('../validators/tipoCuenta.validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();

router.route('/')
    .get(traerTipoCuentas)
    .post(validarTipoCuenta, validarCampos, cargarTipoCuenta);
router.route('/nombres')
    .get(traerNombres)
router.route('/:id')
    .delete(borrarTipoCuenta)
    .get(traerTipoCuentaPorId)
    .put(validarTipoCuenta, validarCampos, modificarTipoCuenta)

module.exports = router;