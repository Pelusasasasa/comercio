const {Router} = require('express');
const { traerClientes, crearCliente, traerClientePorId, modificarCliente, borrarCliente, traerClientePorCodigo, traerClientesPorBusqueda } = require('../controllers/cliente.controllers');
const validarCampos = require('../middlewares/validarCampos');
const { validarCliente } = require('../validators/cliente.validator');
const router = Router();

router.route('/')
    .get(traerClientes)
    .post(validarCliente, validarCampos, crearCliente)
router.route('/:id')
    .delete(borrarCliente)
    .get(traerClientePorId)
    .put(validarCliente, validarCampos, modificarCliente)
router.route('/busqueda/:text')
    .get(traerClientesPorBusqueda)
router.route('/codigo/:codigo')
    .get(traerClientePorCodigo)

module.exports = router;