/*
  Various events used by the socket server
*/

/* NATIVE EVENTS */
exports.CONNECT = "connect";
exports.DISCONNECT = "disconnect";
exports.DISCONNECTING = "disconnecting";

/* CUSTOM EVENTS */
exports.CLIENT_USER_JOIN = "client user joined";
exports.SERVER_USERS_UPDATED = "server users updated";
exports.CLIENT_CHAT_MESSAGE = "client chat message sent";
exports.SERVER_CHAT_UPDATED = "server chat messages updated";
exports.SERVER_MESSAGE_PRIVATE = "private server message";
