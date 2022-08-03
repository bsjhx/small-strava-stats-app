`use strict`;

const express = require("express");
const routerV1 = require("./src/routes/routes-v1");
const path = require("path");
const port = 3000;

var app = express();

app.use("/v1", routerV1);

// TODO add logger
app.listen(port, function () {
  console.log("API starting...");
});
