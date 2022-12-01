import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="p-12 border-2 rounded-md border-neutral-800"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col mb-6">
          <label className="mb-3 text-2xl" htmlFor="">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 font-bold text-blue-500 outline-none focus:outline-blue-500"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-3 text-2xl" htmlFor="">
            Room
          </label>
          <input
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="px-4 py-2 font-bold text-blue-500 outline-none focus:outline-blue-500"
            type="text"
          />
        </div>
        <Link
          onClick={(e) => {
            // invalid input prevent sending
            if (name.trim() === "" || room.trim() === "") {
              e.preventDefault();
            }
          }}
          href={{
            pathname: "/rooms/[room]",
            query: {
              name,
              room,
            },
          }}
          className="block w-full py-2 text-2xl text-center bg-blue-500"
          type="submit"
        >
          Join
        </Link>
      </form>
    </div>
  );
}
