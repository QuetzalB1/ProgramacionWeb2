const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: '39648',
    database: 'webUno'
});

db.connect(err => {
    if (err) {
        console.error('Error en la conexión a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos realizada correctamente');
    }
});

module.exports = db;
