export {};

declare global {
  type user = {
    name: string;
    room: string;
    id: string;
  };
  type message = {
    name: string;
    message: string;
    timestamp: string;
  };
}
