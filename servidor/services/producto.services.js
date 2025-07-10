const Producto = require('../models/Producto');

const cambiarStock = async(productos) => {
    let productosCambiados = [];
    let ok = true;
    let errores = [];

    for (let {_id, cantidad} of productos){
        try {
            const producto = await Producto.findById(_id);

            if(!producto){
                errores.push(`Porducto con el ${_id} no existe en la base de datos.  Se Omitio`);
                continue;
            }
        
            producto.stock = producto.stock - cantidad;
            await producto.save();    
            productosCambiados.push(producto);

    } catch (error) {
        console.error(error);;
        ok = false;
        return {
            ok: false,
            msg: 'No se pudo modificar el stock del producto, hable con el administrador'
        }
    }
    };

    return {
        ok,
        productosCambiados,
        errores
    };
};

module.exports = {
    cambiarStock
};