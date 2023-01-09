const socketio = require("socket.io");

const Room = require("./Rooms");
const Canvas = require("./Canvas");
const Disconnect = require("./Disconnect");
const Game = require("./Game");

module.exports.init = (server) => {
  const io = socketio(server);
  io.on("connection", function (socket) {
    console.log("User Connected");
  });
  io.emit("connection")
};
