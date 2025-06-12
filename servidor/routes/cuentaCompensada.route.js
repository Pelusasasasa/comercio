const {Router} = require('express');
const { crearCuentaCompensada, borrarCuentaCompensada, modificarCuentaCompensada, traerCuentaCompensadaActivaPorCliente } = require('../controllers/cuentaCompensada.controllers');
const router = Router();

router.route('/')
    .post(crearCuentaCompensada)
router.route('/:id')
    .delete(borrarCuentaCompensada)
    .put(modificarCuentaCompensada)
router.route('/cliente/:cliente')
    .get(traerCuentaCompensadaActivaPorCliente)

module.exports = router;