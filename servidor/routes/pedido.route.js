const {Router} = require('express');
const { crearPedido, traerPedidos, modificarPedido, traerPedidosPorEstado, borrarPedido } = require('../controllers/pedido.controllers');
const router = Router();

router.route('/')
    .get(traerPedidos)
    .post(crearPedido)
router.route('/:id')
    .delete(borrarPedido)
    .put(modificarPedido)
router.route('/estado/:estado')
    .get(traerPedidosPorEstado)


module.exports = router;