const MovimientoStock = require("../models/MovimientoStock");

const cargarMovimientos = async(productos, tipo, numero, usuario) => {
    let movimientos = [];
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
            movimientos.push(movimineto);
        };
        return {
            ok: true,
            movimientos
        }
    } catch (error) {
        console.error(error);;
        return error
        
    }
};

module.exports = {
    cargarMovimientos
}