const { Server } = require("socket.io");
const http = require("http");

const SOCKET_EVENTS = require("./socketEvents");
const PORT = process.env.PORT || 5000;
const httpServer = http.createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

const rooms = {
  // "1": {
  //   users: [],
  //   messages: []
  // }
};
let users = [];
let messages = [];

function roomAlreadyHasName(name, room) {
  return rooms[room].users.find((user) => user.name === name);
}
function createRoomIfItDoesNotExist(room) {
  if (rooms[room] === undefined) {
    rooms[room] = {
      users: [],
      messages: [],
    };
  }
}
function addMessage(name, room, message) {
  createRoomIfItDoesNotExist(room);
  const chatroom = rooms[room];

  chatroom.messages.push({
    name,
    message,
    timestamp: new Date().toISOString(),
  });

  io.to(room).emit("server message", chatroom.messages);
}
function addUser(name, room, id) {
  users.push({ name, room, id });
  io.emit("join server", users);
}
function removeUser(room, id) {
  createRoomIfItDoesNotExist(room);

  const chatroom = rooms[room];
  chatroom.users = chatroom.users.filter((user) => {
    if (user.id === id) {
      addMessage("Admin", room, `${user.name} has left!`);
    }
    return user.id !== id;
  });

  io.to(room).emit("user disconnect server", users);
}

io.on("connection", (socket) => {
  console.log("connection: ", socket.id);

  socket.on("client message", (name, room, message, callback) => {
    if (!name || !room || !message || !callback) return;

    addMessage(name, room, message);
    callback();
  });
  socket.on("join", (name, room, callback) => {
    console.log("join", socket.id);

    createRoomIfItDoesNotExist(room);

    if (roomAlreadyHasName(name, room)) {
      callback(`The name: ${name} is taken in room: ${room}`);
    } else {
      const chatroom = rooms[room];
      chatroom.users.push({ name, room, id: socket.id });
      socket.join(room);
      io.to(room).emit("join server", chatroom.users);
      addMessage("Admin", room, `${name} has joined!`);
      callback(null);
    }

    console.dir(rooms, { depth: null });
  });
  socket.on("disconnecting", (reason) => {
    // figure out the rooms that the socket is in and remove it
    let i = 0;
    for (const room of socket.rooms.values()) {
      // the first value is going to be the socket's id so we skip it
      if (i === 0) {
        i = 1;
        continue;
      }

      const chatroom = rooms[room];
      chatroom.users = chatroom.users.filter((user) => {
        if (user.id === socket.id) {
          addMessage("Admin", room, `${user.name} has left`);
        }

        return user.id !== socket.id;
      });
      io.to(room).emit("user disconnect server", chatroom.users);
      console.log(chatroom);
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
