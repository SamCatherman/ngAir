const express = require('express');
const exphbs = require('express-handlebars');
const request = require('request');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
const key = process.env.AIRVISUAL_KEY;

app.use("/public", express.static("public"));

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "layouts/main",
  partialsDir: "views/",
  layoutsDir: "views/"
}));

app.get("/", (req, res) => {
  res.render('air-index')
})

app.get("/airvisual", (req, res) => {
  request(`http://api.airvisual.com/v2/city?country=${req.query.country}&state=${req.query.state}&city=${req.query.city}&key=${key}`, (err, response, body) => {
    res.send(body);
  })
})

app.listen(port, () => {
  console.log("App listening at port: " + port);
})
