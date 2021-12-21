const express = require("express");
const app = express();
require('dotenv').config();

import { getAllData, getOneData } from "./db/client"

const APP_PORT = process.env.PORT || 8080;

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Api paqueteria grupo 6 ");
});

app.get("/guia", async function (req, res) {
    let mesagge = "Datos incorrectos, por favor recargue la pagian y/o intente de nuevo";
    let status = 404;
    if (req.query.numero && req.query.numero.trim() != "") {
        mesagge = await getOneData("envios", req.query.numero);
    }
    res.status(status).send({ mesagge });
});

app.post("/create", (req, res) => {

    console.log(req)

});

app.listen(APP_PORT, "0.0.0.0", () => console.log('Escuchando por el puerto: ', APP_PORT));