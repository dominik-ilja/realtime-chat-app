import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chat from "../../components/Pages/Rooms/Chat/Chat";
import Header from "../../components/Pages/Rooms/Header/Header";

const Room = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChatSidebar, setShowChatSidebar] = useState(true);
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
    <div className="grid h-screen grid-rows-[auto,_1fr]">
      {room && (
        <Header
          room={room}
          onToggleClick={() => setShowChatSidebar(!showChatSidebar)}
        />
      )}
      {name && room && (
        <Chat name={name} room={room} showSidebar={showChatSidebar} />
      )}
    </div>
  );
};

export default Room;
