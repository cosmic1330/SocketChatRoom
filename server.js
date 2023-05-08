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
  console.log(`a user ${socket.id} connected`);
  // 離線
  socket.on("disconnect", function () {
    console.log(`user ${socket.id} disconnected`);
  });

  // 加入指定的房間
  socket.on("joinRoom", ({ room, nickName }) => {
    socket.join(room);
    socket.to(room).emit("join", `Client ${nickName} joined room ${room}`);
  });

  // 離開指定的房間
  socket.on("leaveRoom", ({ room, nickName }) => {
    socket.leave(room);
    socket.to(room).emit("leave", `Client ${nickName} leaft room ${room}`);
  });

  // 傳送訊息至特定房間的成員
  socket.on("messageRoom", ({ room, nickName, message }) => {
    console.log({room, nickName, message})
    socket.to(room).emit("message", {nickName, message});
  });

  socket.on("userBroadcast", function ({msg, nickName}) {
    socket.broadcast.emit("userBroadcast", {msg, nickName});
  });
});

// listen work
var zmq = require("zeromq"),
zeromq = zmq.socket("pull");

zeromq.connect("tcp://127.0.0.1:3000");
console.log("Worker connected to port 3000");

zeromq.on("message", function (msg) {
  console.log("work: %s", msg.toString());
  io.emit("systemBroadcast", msg.toString());
});
