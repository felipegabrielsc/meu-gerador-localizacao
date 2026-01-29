const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/localizacao', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Localização recebida: Latitude ${latitude}, Longitude ${longitude}`);
    res.json({ status: 'Recebido', latitude, longitude });
});

// Exporte o app para Vercel
module.exports = app;
