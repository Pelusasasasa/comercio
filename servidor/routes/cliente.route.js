const {Router} = require('express');
const { traerClientes, crearCliente, traerClientePorId, modificarCliente, borrarCliente } = require('../controllers/cliente.controllers');
const router = Router();

router.route('/')
    .get(traerClientes)
    .post(crearCliente)
router.route('/:id')
    .delete(borrarCliente)
    .get(traerClientePorId)
    .put(modificarCliente)


module.exports = router;