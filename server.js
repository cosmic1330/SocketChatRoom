const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors()); // 解決跨域問題
app.get("/", function (req, res) {
  res.send("Express running");
});

const server = require("http").Server(app);
server.listen(4000, () => {
  console.log("Server listening on *:4000");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
io.sockets.on("connection", function (socket) {
  console.log("a user connected");

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });

  socket.on("chat message", function (msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});


// listen work
var zmq = require("zeromq"),
  sock = zmq.socket("pull");

sock.connect("tcp://127.0.0.1:3000");
console.log("Worker connected to port 3000");

sock.on("message", function(msg) {
  console.log("work: %s", msg.toString());
});
