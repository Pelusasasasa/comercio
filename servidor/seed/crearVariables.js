const Variable = require('../models/Variable');

const crearDolar = async () => {
    try {
        const variableDolar = await Variable.findOne({ clave: 'DOLAR' });
        if (!variableDolar) {
            await Variable.create({
                clave: 'DOLAR',
                valor: 0,
                descripcion: 'Valor del Dolar Oficial',
            });

            console.log('🟢 Variable DOLAR Creada Por defecto');
        }else{
            console.log('🟡 Ya existe la variable DOLAR, Seeder no necesario');
        }


    } catch (error) {
        console.error('❌ Error al crear la variable DOLAR:', error);
    }
}

module.exports = {
    crearDolar
};