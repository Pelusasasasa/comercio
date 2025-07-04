const Numero = require("../models/Numero");

const actualizarNumero = async(tipo) => {
    
    try {
        const numero = await Numero.findOneAndUpdate(
            {tipo},
            { $inc: { numero: 1}},
            {new:true, upsert: true}
        );
        return numero

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    actualizarNumero
}