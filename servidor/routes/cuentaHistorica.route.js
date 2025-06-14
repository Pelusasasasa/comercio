const {Router} = require('express');
const { crearCuentaHistorica, borrarCuentaHistorica, modifcarCuentaHistorica, traerCuentaHistoricaPorCliente } = require('../controllers/cuentaHistorica.controllers');
const { validarCuentaHistorica } = require('../validators/cuentaHistorica.validator');
const validarCampos = require('../middlewares/validarCampos');

const router = Router();

router.route('/')
    .post(validarCuentaHistorica, validarCampos, crearCuentaHistorica)
router.route('/:id')
    .delete(borrarCuentaHistorica)
    .put(validarCuentaHistorica, validarCampos, modifcarCuentaHistorica)
router.route('/cliente/:cliente')
    .get(traerCuentaHistoricaPorCliente)

module.exports = router;