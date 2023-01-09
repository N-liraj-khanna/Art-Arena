// Imports Packages
const express = require("express");
const { EventEmitter } = require("events");
require("dotenv").config({ path: "config.env" });

// Import Files
const sockets = require("./controllers/sockets");

// Constants
const app = express();
const PORT = process.env.PORT || 3000;

global.round = new EventEmitter();
global.games = {};
global.BONUS = 250;
global.MAX_POINTS = 500;

// Middlewares
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  const roomID = req.query.id;
  return res.render('index', { roomID });
});

// Configurations
const server = app.listen(PORT, () => {
  console.log(`Server up and running on port ${server.address().port}`);
});

sockets.init(server);
