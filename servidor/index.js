const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 3000;

conectarDB()

app.use(express.json());
app.use(cors());

app.use('/comercio/categoria', require('./routes/categoria.route'))
app.use('/comercio/cheque', require('./routes/cheque.route'))
app.use('/comercio/cliente', require('./routes/cliente.route'))
app.use('/comercio/cuentaCompensada', require('./routes/cuentaCompensada.route'))
app.use('/comercio/cuentaHistorica', require('./routes/cuentaHistorica.route'))
app.use('/comercio/marca', require('./routes/marca.route'))

app.listen(PORT, () => {
    console.log(`Servidor cooriendo en el puerto ${PORT}`);
});