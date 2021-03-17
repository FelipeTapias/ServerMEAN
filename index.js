const express = require('express');
const conectarDB = require('./config/db');
require('dotenv').config({ path: '.env' });


//Creamos el servidor
const app = express();

//Conectamos a la DB
conectarDB();

app.use(express.json());

app.use('/products', require('./routes/product'));

app.listen(process.env.PORT, () => {
    console.log('Server connected');
});