"use strict";

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, "bundle.js"));
});

app.listen(process.env.PORT || 8080);