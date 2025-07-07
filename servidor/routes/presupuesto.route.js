const { Router } = require('express');
const { crearPresupuesto, traerPresupuestoPorId, borrarPresupuesto, modificarPresupuesto, traerPresupuestosPorFecha } = require('../controllers/presupuesto.controllers');
const validarCampos = require('../middlewares/validarCampos');
const { validarPresupuesto } = require('../validators/presupuesto.validator');
const router = Router();

router.route('/')
    .post(validarCampos, validarPresupuesto, crearPresupuesto)
router.route('/porFecha/:desde/:hasta')
    .get(traerPresupuestosPorFecha)
router.route('/:id')
    .delete(borrarPresupuesto)
    .get(traerPresupuestoPorId)
    .put(validarCampos, validarPresupuesto, modificarPresupuesto)


module.exports = router