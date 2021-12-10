const express = require("express");
const app = express();
require('dotenv').config()
const APP_PORT = process.env.PORT || 8080;


app.get("/", function (req, res) {
    res.send("Api paqueteria grupo 6");
});

app.listen(APP_PORT, "0.0.0.0", () => console.log('Escuchando por el puerto: ', APP_PORT));