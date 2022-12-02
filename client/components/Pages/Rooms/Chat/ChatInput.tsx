import { ChangeEventHandler, FormEventHandler, useState } from "react";

type Props = {
  onSubmit: FormEventHandler;
  onChange: ChangeEventHandler;
  message: string;
  room?: string;
};

const ChatInput = (props: Props) => {
  return (
    <form
      className="z-20 flex-shrink-0 md:mr-8 justify-self-end"
      onSubmit={props.onSubmit}
    >
      <input
        className="relative w-full px-4 py-2 text-lg rounded-sm  bg-[#fff5e1] dark:bg-[#434A56] outline ouline-2 outline-transparent focus:outline-primary"
        type="text"
        placeholder={"Message Room" + (props.room ? `: ${props.room}` : "")}
        value={props.message}
        onChange={props.onChange}
      />
    </form>
  );
};

export default ChatInput;
