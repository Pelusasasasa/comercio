const mongoose = require('mongoose');
const runSeeders = require('../seed');
require('dotenv').config();

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB Conectado')
        await runSeeders();
    } catch (error) {
        console.log(`Error al conectar mongoDB`, error);
        process.exit(1);
    };
};

    module.exports = conectarDB;