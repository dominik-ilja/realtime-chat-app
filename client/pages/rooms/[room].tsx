import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chat from "../../components/Pages/Rooms/Chat/Chat";
import Header from "../../components/Pages/Rooms/Header/Header";

const Room = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { name, room } = router.query;

    /*
      Redirect to home page user tried navigating to page
      without going through home page
    */
    if (name === undefined || room === undefined) {
      router.push("/");
    } else {
      setName(name as string);
      setRoom(room as string);
    }
  }, []);

  return (
    <div className="flex flex-col max-h-screen">
      {room && <Header room={room} />}
      {name && room && <Chat name={name} room={room} />}
    </div>
  );
};

export default Room;
