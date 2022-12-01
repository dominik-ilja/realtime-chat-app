const { Server } = require("socket.io");
const http = require("http");

const SOCKET_EVENTS = require("./socketEvents");
const PORT = process.env.PORT || 5000;
const httpServer = http.createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

let users = [];
let messages = [];

function addMessage(name, message) {
  messages.push({
    name,
    message,
    timestamp: new Date().toISOString(),
  });
  io.emit("server message", messages);
}
function addUser(name, room, id) {
  users.push({ name, room, id });
  io.emit("join server", users);
}
function removeUser(id) {
  users = users.filter((user) => {
    if (user.id === id) {
      addMessage("Admin", `${user.name} has left!`);
    }
    return user.id !== id;
  });

  io.emit("user disconnect server", users);
}

io.on("connection", (socket) => {
  // console.log("connection: ", socket.id);

  socket.on("client message", (name, message, callback) => {
    addMessage(name, message);
    callback();
  });
  socket.on("join", (name, room, callback) => {
    console.log("join", socket.id);

    if (users.find((user) => user.name === name)) {
      callback("Name already exists");
    } else {
      addUser(name, room, socket.id);
      addMessage("Admin", `${name} has joined!`);
      callback(null);
    }
  });
  socket.on("disconnect", (reason) => {
    // console.log("user disconnected: ", reason, socket.id);
    removeUser(socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
