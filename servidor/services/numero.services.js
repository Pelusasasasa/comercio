const Numero = require("../models/Numero");

const actualizarNumeroRecibo = async(tipo) => {
    
    try {
        const numero = await Numero.findOneAndUpdate(
            {tipo},
            { $inc: { numero: 1}},
            {new:true, upsert: true}
        );
        console.log(numero)
        return numero.numero

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    actualizarNumeroRecibo
}