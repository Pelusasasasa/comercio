const Pedido = require('../models/Pedido');

const borrarPedido = async(req, res) => {
    const { id } = req.params;

    try {
        const pedido = await Pedido.findByIdAndDelete(id);

        if(!pedido) return res.status({
            ok: false,
            msg: 'No se encontro el pedido'
        });

        res.status(200).json({
            ok: true,
            pedido
        })
    } catch (error) {
        console.error(error);;
        res.status(500).sjon({
            ok: true,
            msg: 'No se pudo borrar el pedido, hable con el administrador'
        })
    }
};

const crearPedido = async(req, res) => {
    try {
        const pedido = new Pedido(req.body);

        await pedido.save();

        res.status(201).json({
            ok: true,
            pedido
        });
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: true,
            msg: 'No se pudo cargar el pedido, hable con el administrador'
        })
    }
};

const modificarPedido = async(req, res) => {
    const  { id } = req.params;
    try {
        const pedido = await Pedido.findByIdAndUpdate(id, req.body, {new: true});

        if(!pedido) return res.status(404).json({
            ok: false,
            msg:'No se encontro el pedido'
        });

        res.status(200).json({
            ok: true,
            pedido
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg:  "No se pudo modificar el pedido, hable con el administrador"
        })
    }
};

const traerPedidos = async(req, res) => {
    try {
        const pedidos = await Pedido.find();

        res.status(200).json({
            ok: true,
            pedidos
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se pudo cargar el pedido, hable con el administrador'
        })
    }
};

const traerPedidosPorEstado = async(req, res) => {
    const { estado } = req.params;

    try {
        const pedidos = await Pedido.find({estado});

        res.status(200).json({
            ok: true,
            pedidos
        })
    } catch (error) {
        console.error(error);;
        res.status(500).json({
            ok: false,
            msg: 'No se puedo obtener los pedidos por el estado, hable con el administrador'
        })
    }
};

module.exports = {
    borrarPedido,
    crearPedido,
    modificarPedido,
    traerPedidos,
    traerPedidosPorEstado
}
