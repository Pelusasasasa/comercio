const Usuario = require('../models/usuario');

const CrearUsuarioAdminSiNoExiste = async() => {
   try {
    const existeUsuario = await Usuario.exists({});

    if(!existeUsuario){
        await Usuario.create({
            nombre: 'ADMIN',
            codigo: '000',
            activo: true,
            permisos: {
                cliente: true,
                producto: true,
                venta: true,
                recibo: true,
                usuario: true,
                numero: true,   
            }
        });

        console.log('🟢 Usuario admin creado por defecto')
    }else{
         console.log('🟡 Ya existe al menos un usuario Admin. Seeder no necesario.');
    };
   } catch (error) {
    console.error("❌ error al cargar el usuario admin por defecto: ", error);  
   }
};

module.exports = CrearUsuarioAdminSiNoExiste;