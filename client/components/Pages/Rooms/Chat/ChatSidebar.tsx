type user = {
  name: string;
};
type Props = {
  users: user[];
  show?: boolean;
};

const ChatSidebar = (props: Props) => {
  return (
    <div
      className={`${
        !!props.show ? "hidden md:block" : "block md:hidden"
      } absolute bottom-0 left-0 right-0 top-0 px-8 py-8 z-[100] bg-sidebar md:static md:w-80 flex-shrink-0 overflow-y-auto`}
    >
      <div className="flex items-center mb-8 text-xl text-gray-800 dark:text-gray-500 gap-x-3">
        People in room:{" "}
        <span className="text-4xl text-primary">{props.users.length}</span>
      </div>
      <div className="flex flex-col gap-y-4">
        {props.users.map(({ name }) => (
          <div key={name} className="flex items-center gap-x-3">
            <div className="flex overflow-x-hidden text-gray-900 dark:text-gray-300 gap-x-3">
              <div className="w-6 h-6 rounded-full shrink-0 bg-primary"></div>
              <div className="flex-grow truncate">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
