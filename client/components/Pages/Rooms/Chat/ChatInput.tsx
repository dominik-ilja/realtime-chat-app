import { ChangeEventHandler, FormEventHandler, useState } from "react";

type Props = {
  onSubmit: FormEventHandler;
  onChange: ChangeEventHandler;
  message: string;
};

const ChatInput = (props: Props) => {
  return (
    <form className="relative z-20 justify-self-end" onSubmit={props.onSubmit}>
      <input
        className="w-full px-4 py-2 text-lg rounded-sm outline-none focus:outline-blue-500"
        type="text"
        placeholder="Message Room"
        value={props.message}
        onChange={props.onChange}
      />
    </form>
  );
};

export default ChatInput;
