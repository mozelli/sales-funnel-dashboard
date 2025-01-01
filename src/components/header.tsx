import { useProject } from "../store/project";

const Header = () => {
  const { name } = useProject();
  return (
    <header className="w-full p-1 border-b flex items-center">
      <div>
        <span className="font-bold text-indigo-700">{name}</span>
      </div>
    </header>
  );
};

export default Header;
