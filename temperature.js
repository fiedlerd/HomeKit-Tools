const express = require('express');
const app = express();
const port = 3000;

let savedTemperatures = {};


app.get('/save', (req, res) => {
    const { room, temp } = req.query;
    if (room && temp) {
        savedTemperatures[room] = parseFloat(temp);
        res.send(`Saved ${temp} for ${room}`);
    } else {
        res.status(400).send('Missing parameters');
    }
});


app.get('/get', (req, res) => {
    const room = req.query.room;
    if (room && savedTemperatures[room]) {
        res.send(savedTemperatures[room].toString());
    } else {
        res.status(404).send('20.0');
    }
});

app.listen(port, () => console.log(`HomeKit Temp-Store läuft auf Port ${port}`));