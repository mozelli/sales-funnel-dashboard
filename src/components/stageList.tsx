import { StickyNote } from "lucide-react";

import { useDashboardStore } from "../store/dashboardState";
import { useFunnelStore } from "../store/funnelState";

const StageList = () => {
  const { funnel, setCurrentStage } = useFunnelStore();
  const { setMenu } = useDashboardStore();

  const changeCurrentStage = (stageId: string, menu: string) => {
    setMenu(menu);
    setCurrentStage(stageId);
  };

  return (
    <div className="">
      <ul>
        {funnel.stages.map((stage, index) => {
          return (
            <li
              key={index}
              className="p-1 flex items-center gap-1 cursor-pointer hover:bg-slate-100"
              onClick={() => changeCurrentStage(stage.id, "componentsMenu")}
            >
              <StickyNote className="h-4 w-4" />
              <span className="text-sm">{stage.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StageList;
