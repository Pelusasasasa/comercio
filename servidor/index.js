const express = require('express');
const cors = require('cors');

const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.use('/comercio/cliente', require('./routes/cliente.route'))

app.listen(PORT, () => {
    console.log(`Servidor cooriendo en el puerto ${PORT}`);
});