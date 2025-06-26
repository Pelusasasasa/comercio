const  CrearUsuarioAdminSiNoExiste  = require("./crearAdmin");

const runSeeders = async() => {
    try {
        await CrearUsuarioAdminSiNoExiste();
    } catch (error) {
        console.log(error);
        console.log('❌ Error al inicializar el usuario admin');
    }
};

module.exports = runSeeders;