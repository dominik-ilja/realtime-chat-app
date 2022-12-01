type user = {
  name: string;
};
type Props = {
  users: user[];
  show?: boolean;
};

const ChatSidebar = (props: Props) => {
  const show = !!props.show;

  return (
    <div
      className={`${
        !show ? "hidden" : ""
      } px-8 py-12 overflow-x-hidden w-[28rem] bg-zinc-900`}
    >
      <div className="flex items-center mb-8 text-xl text-gray-600 gap-x-3">
        People in room:{" "}
        <span className="text-4xl text-blue-500">{props.users.length}</span>
      </div>
      <div className="flex flex-col gap-y-4">
        {props.users.map(({ name }) => (
          <div key={name} className="flex items-center gap-x-3">
            <div className="text-gray-300">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
