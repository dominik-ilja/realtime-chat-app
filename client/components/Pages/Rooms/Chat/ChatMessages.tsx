import { useEffect, useRef } from "react";

type message = {
  name: string;
  message: string;
};

type Props = {
  messages: message[];
};

const ChatMessages = ({ messages }: Props) => {
  const chatbox = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    if (chatbox.current !== null) {
      chatbox.current.scrollTo(0, chatbox.current.scrollHeight);
    }
  }, [messages]);

  return (
    <ul ref={chatbox} className="py-12 overflow-x-hidden overflow-y-scroll">
      {messages.map(({ name, message }, idx) => (
        <li className="flex mb-8 gap-x-4 last:mb-0" key={idx}>
          <div className="w-10 h-10 bg-gray-600 rounded-full shrink-0"></div>
          <div>
            <div className="flex items-center mb-2 gap-x-3">
              <div className="text-xl text-white">{name}</div>
              <div className="text-sm text-gray-600">Today at 8:31 PM</div>
            </div>
            <p className="text-slate-400">{message}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChatMessages;
