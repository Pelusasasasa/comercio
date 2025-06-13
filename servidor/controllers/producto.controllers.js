const Producto = require('../models/Producto');

const borrarProducto = async(req, res) => {
    const { id } = req.params;

    try {
        const producto = await Producto.findByIdAndDelete(id);

        if(!producto) res.status(404).json({
            ok: false,
            msg: 'No se encontro el producto'
        });

        res.status(200).json({
            ok: true,
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo eliminar el producto, hable con el administrador'
        })
    }
};

const crearProducto = async(req, res) => {
    try {
        const producto = new Producto(req.body);

        await producto.save();

        res.status(201).json({
            ok: true,
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo cargar el producto, hable con el administrador'
        })
    }
};

const modificarProducto = async(req, res) => {
    const { id } = req.params;

    try {
        const producto = await Producto.findByIdAndUpdate(id, req.body, { new: true});

        if(!producto) res.status(404).json({
            ok: false,
            msg: 'No se encontro el producto'
        });

        res.status(200).json({
            ok: true,
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo Modificar el producto, hable con el administrador'
        })
    }
};

const traerProductoPorId = async(req, res) => {
    const { id } = req.params;

    try {
        const producto = await Producto.findById(id);

        if(!producto) return res.status(404).json({
            ok: true,
            msg:'No se encontro el producto'
        })

        res.status(200).json({
            ok: true,
            producto
        })
    } catch (error) {
        console.log(error);
        res.status(500).sjon({
            ok: false,
            msg: 'No se pudo obtener el producto, hable con el administrador'
        });
    }
};

const traerProductos = async(req, res) => {
    try {
        const productos = await Producto.find();

        res.status(200).json({
            ok: true,
            productos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener los productos, hable conm el administrador'
        })
    }
};


module.exports = {
    borrarProducto,
    crearProducto,
    modificarProducto,
    traerProductoPorId,
    traerProductos,
}