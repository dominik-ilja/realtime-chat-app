/*
  Various events used by the socket server
*/

// export const CLIENT_MESSAGE = "client message";
// export const SERVER_MESSAGE = "server message";
// export const SERVER_MESSAGE_PRIVATE = "private server message";
// export const CONNECT = "connect";
// export const DISCONNECT = "disconnect";

/* NATIVE EVENTS */
export const CONNECT = "connect";
export const DISCONNECT = "disconnect";
export const DISCONNECTING = "disconnecting";

/* CUSTOM EVENTS */
export const CLIENT_USER_JOIN = "client user joined";
export const SERVER_USERS_UPDATED = "server users updated";
export const CLIENT_CHAT_MESSAGE = "client chat message sent";
export const SERVER_CHAT_UPDATED = "server chat messages updated";
export const SERVER_MESSAGE_PRIVATE = "private server message";
