const express = require('express');
const time = require('./Middleware/fecha_hora'); // Ajustado al nombre de tu archivo
const mensaje = require('./Middleware/mensaje'); // Ajustado al nombre de tu archivo
const rutas = require('./Rutas/rutas'); // Ajustado al nombre de tu archivo

const app = express();
const port = 3000;

// Aplicar middlewares globales
app.use(time);
app.use(mensaje);

// Usar las rutas definidas
app.use('/', rutas);

app.listen(port, () => {
    console.log("Tu servidor en http://localhost:"+port);
});