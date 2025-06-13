const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 3000;

conectarDB()

app.use(express.json());
app.use(cors());

app.use('/comercio/categoria', require('./routes/categoria.route'));
app.use('/comercio/cheque', require('./routes/cheque.route'));
app.use('/comercio/cliente', require('./routes/cliente.route'));
app.use('/comercio/cuentaCompensada', require('./routes/cuentaCompensada.route'));
app.use('/comercio/cuentaHistorica', require('./routes/cuentaHistorica.route'));
app.use('/comercio/marca', require('./routes/marca.route'));
app.use('/comercio/movimientoStock', require('./routes/movimientoStock.route'));
app.use('/comercio/numero', require('./routes/numero.route'));
app.use('/comercio/pedido', require('./routes/pedido.route'));
app.use('/comercio/producto', require('./routes/producto.route'));
app.use('/comercio/provedor', require('./routes/provedor.route'));
app.use('/comercio/tarjeta', require('./routes/tarjeta.route'));
app.use('/comercio/tipoTarjeta', require('./routes/tipoTarjeta.route'));
app.use('/comercio/unidadMedida', require('./routes/unidadMedida.route'));
app.use('/comercio/usuario', require('./routes/usuario.route'));

app.listen(PORT, () => {
    console.log(`Servidor cooriendo en el puerto ${PORT}`);
});