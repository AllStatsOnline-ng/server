const express = require("express");
const { Router } = require("./api/main");

require("dotenv").config();

const app = express();

app.use(require("cors")());
app.use(require("morgan")("combined"));

app.use("/", Router);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Listening on ${PORT} - ${new Date().toString()}`)
);
