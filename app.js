const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Running MVC Application, Student API Project.");
});

app.listen(3000);