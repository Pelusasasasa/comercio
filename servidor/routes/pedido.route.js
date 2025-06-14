const {Router} = require('express');
const { crearPedido, traerPedidos, modificarPedido, traerPedidosPorEstado, borrarPedido } = require('../controllers/pedido.controllers');
const { validarPedido } = require('../validators/pedido.validator');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();

router.route('/')
    .get(traerPedidos)
    .post(validarPedido, validarCampos, crearPedido)
router.route('/:id')
    .delete(borrarPedido)
    .put(validarPedido, validarCampos, modificarPedido)
router.route('/estado/:estado')
    .get(traerPedidosPorEstado)


module.exports = router;