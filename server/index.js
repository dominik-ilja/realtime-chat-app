const { Server } = require("socket.io");
const http = require("http");

const SOCKET_EVENTS = require("./socketEvents");
const PORT = process.env.PORT || 5000;
const httpServer = http.createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

let users = [];
let messages = [];

io.on("connection", (socket) => {
  // console.log("connection: ", socket.id);

  socket.on("client message", (name, message, callback) => {
    messages.push({ name, message });
    io.emit("server message", messages);
    callback();
  });
  socket.on("join", (name, room, callback) => {
    console.log("join", socket.id);

    if (users.find((user) => user.name === name)) {
      callback("Name already exists");
    } else {
      users.push({ name, room, id: socket.id });
      messages.push({ name: "Admin", message: `${name} has joined!` });
      io.emit("join server", users);
      io.emit("server message", messages);
      callback(null);
    }
  });
  socket.on("disconnect", (reason) => {
    // console.log("user disconnected: ", reason, socket.id);

    users = users.filter((user) => {
      if (user.id === socket.id) {
        messages.push({ name: "Admin", message: `${user.name} has left!` });
      }
      return user.id !== socket.id;
    });

    console.log(users);
    io.emit("user disconnect server", users);
    io.emit("server message", messages);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
