const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.APP_PORT || 8080;


app.get("/", function (req, res) {
    res.send("Api paqueteria grupo 6");
});

app.listen(PORT, () => console.log('Escuchando por le puerto: ', PORT));