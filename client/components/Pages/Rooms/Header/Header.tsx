import Container from "../../../../components/Container/Container";

type Props = {
  room?: string;
};

const Header = (props: Props) => {
  return (
    <header className="border-b border-gray-800 bg-neutral-900">
      <Container className="flex items-center justify-between py-4">
        <div className="text-2xl text-gray-500">
          Welcome to room:{" "}
          <span className="text-4xl text-blue-500">{props.room}</span>
        </div>
        <div className="w-6 h-6 mr-8 rounded-full bg-slate-400"></div>
      </Container>
    </header>
  );
};

export default Header;
