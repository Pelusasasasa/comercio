const Cliente = require("../models/Cliente");

const modificarSaldoCliente = async(codigo, precio) => {
    try {
        const cliente = await Cliente.findById(codigo);

        if(!cliente){
            return {
                ok: false,
                msg: 'Cliente no encontrado'
            }
        };

        cliente.saldo += precio;
        await cliente.save();

        return {
            ok: true,
            cliente
        }
    }catch (error) {
        console.error(error);
        return {
            ok: false,
            msg: 'Error al modificar el saldo del cliente'
        }
    }
};


module.exports = {
    modificarSaldoCliente
}