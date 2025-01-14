import { useState } from "react";

import { Plus, StickyNote } from "lucide-react";
import { Button } from "./ui/button";

import { useFunnelStore } from "../store/funnelState";
import { Node } from "../types/Node";

const LeftSideBar = () => {
  const { funnel, addStage, setCurrentStage, currentStage, addNodeToStage } =
    useFunnelStore();
  const [stageName, setStageName] = useState("");

  const addNewStage = () => {
    //setStep({ id: "", project_id: id, name: stepName, nodes: [] });
    const id = crypto.randomUUID();
    addStage({ id, name: stageName, nodes: [] });
    setCurrentStage(id);
    setStageName("");
  };

  const addNewNode = (type: string) => {
    const node: Node = {
      id: crypto.randomUUID(),
      type,
      attributes: {
        key: crypto.randomUUID(),
      },
      children: [],
    };
    addNodeToStage(currentStage, node);
  };

  return (
    <div className="flex w-[400px] p-1">
      <div className="flex flex-col w-[300px] border-r">
        <div className="flex gap-1">
          <input
            placeholder="Criar nova etapa"
            type="text"
            value={stageName}
            onChange={(e) => setStageName(e.target.value)}
            className="border-2 rounded-sm p-1 outline-none"
          />
          {
            <Button
              variant={"outline"}
              className="border-indigo-200 border-2 rounded-sm"
              onClick={() => addNewStage()}
            >
              <Plus />
            </Button>
          }
        </div>
        <div className="">
          <ul>
            {funnel.stages.map((stage, index) => {
              return (
                <li
                  key={index}
                  className="p-2 flex items-center gap-1 cursor-pointer"
                  onClick={() => setCurrentStage(stage.id)}
                >
                  <StickyNote />
                  <span>{stage.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col gap-1 items-center w-[100px] pl-1 ${
          funnel.stages.length === 0 ? "hidden" : "block"
        }`}
      >
        <Button
          className="w-full bg-slate-400 hover:bg-slate-800"
          size={"sm"}
          onClick={() => addNewNode("alert")}
        >
          Alerta
        </Button>
        <Button
          className="w-full bg-slate-400 hover:bg-slate-800"
          size={"sm"}
          onClick={() => addNewNode("button")}
        >
          Botão
        </Button>
        <Button
          className="w-full bg-slate-400 hover:bg-slate-800"
          size={"sm"}
          onClick={() => addNewNode("alert")}
        >
          Alert
        </Button>
      </div>
    </div>
  );
};

export default LeftSideBar;
