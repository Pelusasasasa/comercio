const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB Conectado')
    } catch (error) {
        console.log(`Error al conectar mongoDB`, error);
        process.exit(1);
    };
};

    module.exports = conectarDB;