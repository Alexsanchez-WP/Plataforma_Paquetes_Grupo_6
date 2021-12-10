const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Api paqueteria grupo 6");
});

app.listen(3000);