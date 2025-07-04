const MovimientoStock = require("../models/MovimientoStock");

const cargarMovimientos = async(productos, tipo, numero, usuario) => {
    try {
        for await(let producto of productos){
            const mov = {};
            mov.fecha = new Date();
            mov.producto = producto._id;
            mov.tipo = tipo;
            mov.cantidad = producto.cantidad;
            mov.stockAntes = producto.stock;
            mov.stockAhora = producto.stock - producto.cantidad;
            mov.precio = producto.precio;
            mov.numeroComprobante = numero;
            mov.creadoPor = usuario;


            const movimineto = new MovimientoStock(mov);
            await movimineto.save();
        };
        return {
            ok: true
        }
    } catch (error) {
        console.log(error);
        return error
        
    }
};

module.exports = {
    cargarMovimientos
}