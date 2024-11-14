// Importar el módulo Express
const express = require('express');

// Crear una aplicación Express
const app = express();

// Definir una ruta para la página principal
app.get('/', (req, res) => {
    res.send('Hola Mundo desde mi servidor Express con Nodemon!');
});

// Hacer que el servidor escuche en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});