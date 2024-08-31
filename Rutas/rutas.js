const express = require('express');
const date = require("../Middleware/fecha_hora");
const mensaje = require("../Middleware/mensaje");


const router = express.Router();

router.get('/',date,(req, res) => {
    res.send('Hola desde la ruta 1');
});

router.get('/mensaje',mensaje, (req, res) => {
    res.send('Hola desde la ruta 2');
});

module.exports = router;