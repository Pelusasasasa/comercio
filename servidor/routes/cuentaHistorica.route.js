const {Router} = require('express');
const { crearCuentaHistorica, borrarCuentaHistorica, modifcarCuentaHistorica, traerCuentaHistoricaPorCliente } = require('../controllers/cuentaHistorica.controllers');

const router = Router();

router.route('/')
    .post(crearCuentaHistorica)
router.route('/:id')
    .delete(borrarCuentaHistorica)
    .put(modifcarCuentaHistorica)
router.route('/cliente/:cliente')
    .get(traerCuentaHistoricaPorCliente)

module.exports = router;