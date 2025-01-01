import { useProject } from "../store/project";

const Header = () => {
  const { name } = useProject();
  return (
    <header className="w-full h-12 p-1 text-indigo-700">
      <div className="flex">
        <span className="font-bold">{name}</span>
      </div>
    </header>
  );
};

export default Header;
