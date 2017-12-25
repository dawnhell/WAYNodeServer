const express = require("express");
const app = express();
const moment = require("moment");
const bodyParser = require("body-parser");

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", function (req, res) {
  console.log("Test response.");
  res.send("Rest response.");
});

app.get("/connect", function (req, res) {
  console.log("Connection to server", moment().format("MMMM Do YYYY, hh:mm:ss a"));
  res.send("OK. Connected to server.");
});

app.post("/add/vrphoto", function (req, res) {
  console.log("Adding new VR Photo", req.body.photo, moment().format("MMMM Do YYYY, hh:mm:ss a"));
  res.send("Ok. Added new VR Photo.");
});

app.listen(3131, () => console.log("App listens port 3131!"));
