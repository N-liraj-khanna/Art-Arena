const { EventEmitter } = require("events");
const sockets = require("./sockets");
const express = require("express");
require("dotenv").config({ path: "config.env" });

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const roomID = req.query.id;
  res.render("index", { roomID });
});

global.round = new EventEmitter();
global.games = {};
global.BONUS = 250;
global.MAX_POINTS = 500;

const server = app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log(`Server listening on port ${server.address().port}`);
});

sockets.init(server);

module.exports = app;
