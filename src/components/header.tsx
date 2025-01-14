import { useFunnelStore } from "../store/funnelState";

const Header = () => {
  const { funnel } = useFunnelStore();
  return (
    <header className="w-full p-1 border-b flex items-center">
      <div>
        <span className="font-bold text-indigo-700">{funnel.name}</span>
      </div>
    </header>
  );
};

export default Header;
