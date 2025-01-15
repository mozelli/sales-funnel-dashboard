import { useState } from "react";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";

import { useFunnelStore } from "../../store/funnelState";
import StageList from "./stageList";

const StagesMenu = () => {
  const { addStage, setCurrentStage } = useFunnelStore();

  const [stageName, setStageName] = useState("");

  const addNewStage = () => {
    const id = crypto.randomUUID();
    addStage({ id, name: stageName, nodes: [] });
    setCurrentStage(id);
    setStageName("");
  };

  return (
    <div className="">
      <div className="flex flex-col max-w-[300px] border-r">
        <div className="text-slate-600 text-xs font-bold m-1">
          Criar nova etapa do funil
        </div>
        <div className="flex justify-between">
          <input
            placeholder="Nome da etapa..."
            type="text"
            value={stageName}
            onChange={(e) => setStageName(e.target.value)}
            className="border-2 rounded-sm p-1 outline-none w-[180px] m-1 text-sm h-8"
          />
          {
            <Button
              variant={"outline"}
              className="border-indigo-200 border-2 rounded-sm m-1 h-8"
              onClick={() => addNewStage()}
            >
              <Plus />
            </Button>
          }
        </div>
        <StageList />
      </div>
    </div>
  );
};

export default StagesMenu;
