const  CrearUsuarioAdminSiNoExiste  = require("./crearAdmin");
const crearNumerosSiNoExiste = require("./crearNumeros");
const { crearDolar } = require("./crearVariables");

const runSeeders = async() => {
    try {
        await CrearUsuarioAdminSiNoExiste();
    } catch (error) {
        console.error(error);;
        console.log('❌ Error al inicializar el usuario admin');
    };

    try {
        await crearNumerosSiNoExiste()
    } catch (error) {
        console.error(error);;
        console.log('❌ Error al inicializar el numero')
    }

    try {
        await crearDolar();
    } catch (error) {
        console.error(error);
        console.log('❌ Error al inicializar la variable DOLAR');
    }
};

module.exports = runSeeders;