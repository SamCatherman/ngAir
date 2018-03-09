const express = require('express');
const exphbs = require('express-handlebars');

require('dotenv').config()

const app = express();
const port = 3000 || process.env.PORT;

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

app.listen(port, () => {
  console.log("App listening at port: " + port);
  console.log(process.env.AIRVISUAL_KEY);
})
