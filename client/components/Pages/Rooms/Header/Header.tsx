import Link from "next/link";
import { MouseEventHandler } from "react";
import { FaUserFriends, FaHome } from "react-icons/fa";

type Props = {
  room?: string;
  onToggleClick?: MouseEventHandler;
};

const Header = (props: Props) => {
  return (
    <header className="overflow-hidden border-b-2 dark:border-[#2c2d2f] bg-bg">
      <div className="flex items-center justify-between px-3 py-4 overflow-hidden md:px-8 gap-x-4">
        <div className="flex-grow overflow-hidden text-2xl text-gray-500 whitespace-nowrap text-ellipsis">
          <span className="text-sm sm:inline md:text-base">
            Welcome to room:
          </span>{" "}
          <span className="text-xl text-primary sm:text-2xl md:text-4xl">
            {props.room}
          </span>
        </div>
        <div className="flex gap-x-2 md:gap-x-4">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 transition-opacity rounded-full bg-primary hover:opacity-80 focus:opacity-80"
          >
            <FaHome fill="white" size={20} />
          </Link>
          <button
            className="flex items-center justify-center w-8 h-8 transition-opacity rounded-full bg-primary hover:opacity-80 focus:opacity-80"
            onClick={props.onToggleClick}
          >
            <FaUserFriends fill="white" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
