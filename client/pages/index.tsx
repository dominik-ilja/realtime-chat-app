import Link from "next/link";
import { useState } from "react";
import Container from "../components/Container/Container";

export default function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Container>
        <form
          className="w-full max-w-md p-8 mx-auto border-2 border-gray-200 dark:border-[#2c2d2f] rounded-md xl:p-12"
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
              className="px-4 py-2 font-bold rounded-md outline-2 outline outline-gray-200 dark:outline-[#2c2d2f] text-primary focus:outline-primary"
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
              className="px-4 py-2 font-bold rounded-md outline-2 outline outline-gray-200 dark:outline-[#2c2d2f] text-primary focus:outline-primary"
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
            className="block w-full py-2 text-2xl text-center transition-opacity rounded-md bg-primary hover:opacity-80 focus:opacity-80"
            type="submit"
          >
            Join
          </Link>
        </form>
      </Container>
    </div>
  );
}
