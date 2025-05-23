const express = require('express');
const router = express.Router();
const db = require('../conexionDB/db');

// Mostrar todos los usuarios
router.get('/', (req, res) => {
    const consultaDB = 'SELECT * FROM Usuarios';
    db.query(consultaDB, (err, results) => {
        if (err) {
            console.error('Error al recuperar usuarios', err);
            return res.send('Error al obtener datos de la DB');
        }
        res.render('index', { users: results });
    });
});

// Agregar un nuevo usuario
router.post('/add', (req, res) => {
    const { nom_usuario, contraseña } = req.body;
    const insertar = 'INSERT INTO Usuarios (nom_usuario, contraseña) VALUES (?, ?)';
    db.query(insertar, [nom_usuario, contraseña], (err) => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            return res.send('Error al agregar usuario');
        }
        res.redirect('/');
    });
});

// Mostrar formulario de edición
router.get('/edit/:usuario_id', (req, res) => {
    const { usuario_id } = req.params;
    const buscar = 'SELECT * FROM Usuarios WHERE usuario_id = ?';
    db.query(buscar, [usuario_id], (err, results) => {
        if (err) {
            console.error('Error al buscar usuario', err);
            return res.send('Error al buscar usuario');
        }
        res.render('edit', { user: results[0] });
    });
});

// Actualizar usuario
router.post('/update/:usuario_id', (req, res) => {
    const { usuario_id } = req.params;
    const { nom_usuario, contraseña } = req.body;
    const actualizar = 'UPDATE Usuarios SET nom_usuario = ?, contraseña = ? WHERE usuario_id = ?';
    db.query(actualizar, [nom_usuario, contraseña, usuario_id], (err) => {
        if (err) {
            console.error('Error al actualizar usuario', err);
            return res.send('Error al actualizar usuario');
        }
        res.redirect('/');
    });
});

// Eliminar usuario
router.get('/delete/:usuario_id', (req, res) => {
    const { usuario_id } = req.params;
    const eliminar = 'DELETE FROM Usuarios WHERE usuario_id = ?';
    db.query(eliminar, [usuario_id], (err) => {
        if (err) {
            console.error('Error al eliminar usuario', err);
            return res.send('Error al eliminar usuario');
        }
        res.redirect('/');
    });
});

module.exports = router;
