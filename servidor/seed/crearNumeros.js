const Numero = require("../models/Numero")


const crearNumerosSiNoExiste = async() => {
    try {
        const numeroRecibo = await Numero.findOne({tipo: 'RECIBO'});

        if(!numeroRecibo){
            await Numero.create({
                tipo: 'RECIBO',
                puntoVenta: 0,
                numero: 0,
                prefijo: 'RC'
            });

            console.log('🟢 Numero Recibo Creado Por defecto');
        }else{
            console.log('🟡 Ya existe ese numero, Seeder no necesario')
        };
    } catch (error) {
        console.error('❌ error al cargar el numero Recibo', error);
    };

    try {
        const numeroContado = await Numero.findOne({tipo: 'CONTADO'});
        if(!numeroContado){
            await Numero.create({
                tipo: 'CONTADO',
                puntoVenta: 1,
                numero: 0,
                prefijo: 'CT'
            });

            console.log('🟢 Numero Contado Creado Por defecto');
        }else{
            console.log('🟡 Ya existe ese numero Contado, Seeder no necesario')
        };
    } catch (error) {
        console.log('❌ error al cargar el numero Contado', error)
    };

    try {
        const numeroCorriente = await Numero.findOne({tipo: 'CORRIENTE'});
        if(!numeroCorriente){
            await Numero.create({
                tipo: 'CORRIENTE',
                puntoVenta: 3,
                numero: 0,
                prefijo: 'CT'
            });

            console.log('🟢 Numero CUENTA CORRIENTE Creado Por defecto');
        }else{
            console.log('🟡 Ya existe ese numero CUENTA CORRIENTE, Seeder no necesario')
        };
    } catch (error) {
        console.log('❌ error al cargar el numero CUENTA CORRIENTE', error)
    };

    try {
        const numeroRemito = await Numero.findOne({tipo: 'REMITO'});
        if(!numeroRemito){
            await Numero.create({
                tipo: 'REMITO',
                puntoVenta: 3,
                numero: 0,
                prefijo: 'RM'
            });

            console.log('🟢 Numero Remito Creado Por defecto');
        }else{
            console.log('🟡 Ya existe ese numero Remito, Seeder no necesario')
        };
    } catch (error) {
        console.log('❌ error al cargar el numero Remito', error)
    };

    try {
        const numeroPresupuesto = await Numero.findOne({tipo: 'PRESUPUESTO'});
        if(!numeroPresupuesto){
            await Numero.create({
                tipo: 'PRESUPUESTO',
                puntoVenta: 3,
                numero: 0,
                prefijo: 'PP'
            });

            console.log('🟢 Numero PRESUPUESTO Creado Por defecto');
        }else{
            console.log('🟡 Ya existe ese numero PRESUPUESTO, Seeder no necesario')
        };
    } catch (error) {
        console.log('❌ error al cargar el numero PRESUPUESTO', error)
    };
};


module.exports = crearNumerosSiNoExiste