const app = require("express").Router();
require('dotenv').config();

app.get('/:IGN', (req, res, error) => {
  let IGN = req.params.IGN;
  const url = `https://api.ngmc.co/v1/players/${IGN}`;

  fetch(url, {
    method: "GET",
    headers: {
      Authorization: process.env.TOKEN,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error)
    });
})

module.exports = app
