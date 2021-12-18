const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

//settings
app.set('port', process.env.PORT || 8080);

// Conectamos a la BD
app.use(morgan('dev', ));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api/productos', require('./routes/producto'));

app.listen(process.env.PORT || 4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})