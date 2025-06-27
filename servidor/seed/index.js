const  CrearUsuarioAdminSiNoExiste  = require("./crearAdmin");
const crearNumerosSiNoExiste = require("./crearNumeros");

const runSeeders = async() => {
    try {
        await CrearUsuarioAdminSiNoExiste();
    } catch (error) {
        console.log(error);
        console.log('❌ Error al inicializar el usuario admin');
    };

    try {
        await crearNumerosSiNoExiste()
    } catch (error) {
        console.log(error);
        console.log('❌ Error al inicializar el numero')
    }
};

module.exports = runSeeders;