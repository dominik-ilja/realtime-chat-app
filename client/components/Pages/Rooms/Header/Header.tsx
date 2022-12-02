import { MouseEventHandler } from "react";
import Container from "../../../../components/Container/Container";

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
          {/* <span className="text-sm sm:hidden">room: </span> */}
          <span className="text-xl text-primary sm:text-2xl md:text-4xl">
            {props.room}
          </span>
        </div>
        {/* TODO: Replace div with button that has icon inside it */}
        <div className="flex gap-x-2 md:gap-x-4">
          <div className="w-6 h-6 rounded-full cursor-pointer bg-primary" />
          <div
            onClick={props.onToggleClick}
            className="w-6 h-6 rounded-full cursor-pointer xl:mr-8 bg-primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
