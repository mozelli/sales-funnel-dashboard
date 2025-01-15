import { ChevronLeft } from "lucide-react";
import { useDashboardStore } from "../../store/dashboardState";
import ComponentsMenu from "./componentsMenu";
import StagesMenu from "./stagesMenu";
import EditTitle from "./editTitle";

const Menu = () => {
  const { menu, setMenu } = useDashboardStore();

  return (
    <div className="w-[250px]">
      <div className="flex items-center bg-indigo-900 py-1">
        <div className="w-6 pl-1">
          {menu !== "" && (
            <ChevronLeft
              className="text-slate-50 cursor-pointer h-5 w-5 hover:bg-indigo-500 rounded-sm"
              onClick={() => {
                if (menu === "componentsMenu") {
                  setMenu("");
                } else if (menu === "editTitle") {
                  setMenu("componentsMenu");
                } else {
                  setMenu("");
                }
              }}
            />
          )}
        </div>
        <span className="text-slate-50 text-sm font-bold ml-4">
          Funnel Factory
        </span>
      </div>
      <div className="">
        {menu === "" && <StagesMenu />}
        {menu === "componentsMenu" && <ComponentsMenu />}
        {menu === "editTitle" && <EditTitle />}
      </div>
    </div>
  );
};

export default Menu;
