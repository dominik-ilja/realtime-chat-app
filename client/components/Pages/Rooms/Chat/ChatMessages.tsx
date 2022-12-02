import { useEffect, useRef } from "react";

type message = {
  name: string;
  message: string;
  timestamp: string;
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
    <ul ref={chatbox} className="flex-grow py-8 overflow-y-scroll md:pr-8">
      {messages.map(({ name, message, timestamp }, idx) => (
        <li className="flex mb-8 gap-x-4 last:mb-0" key={idx}>
          <div className="w-8 h-8 rounded-full md:w-10 md:h-10 bg-primary shrink-0"></div>
          <div className="overflow-hidden">
            <div className="flex items-center pb-1 mb-2 border-b gap-x-3 dark:border-[#2c2d2f] border-stone-200">
              <div className="flex-grow text-xl truncate text-text">{name}</div>
              <div className="flex-shrink-0 text-sm text-stone-400">
                {new Date(timestamp).toLocaleString(undefined, {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </div>
            </div>
            <p className="break-words text-stone-700 dark:text-stone-300">
              {message}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChatMessages;
