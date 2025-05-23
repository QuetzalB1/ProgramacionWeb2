const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rutas = require('./logicadb/router'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('publico'));


// Motor de plantillas
app.set('view engine', 'ejs');

// Usar rutas
app.use('/', rutas);

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en ejecución: http://localhost:${port}`);
});
