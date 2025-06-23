const {Router} = require('express');
const { crearCuentaCompensada, borrarCuentaCompensada, modificarCuentaCompensada, traerCuentaCompensadaActivaPorCliente, actualizarCuentaCompensada } = require('../controllers/cuentaCompensada.controllers');
const { validarCuentaCompensada } = require('../validators/cuentaCompensada.validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();

router.route('/')
    .post(validarCuentaCompensada, validarCampos, crearCuentaCompensada)
router.route('/:id')
    .post(actualizarCuentaCompensada)
    .delete(borrarCuentaCompensada)
    .put(validarCuentaCompensada, validarCampos, modificarCuentaCompensada)
router.route('/cliente/:cliente')
    .get(traerCuentaCompensadaActivaPorCliente)

module.exports = router;