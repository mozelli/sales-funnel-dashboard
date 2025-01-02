import { useState } from "react";
import { useProject } from "../store/project";
import { Plus, StickyNote } from "lucide-react";
import { Button } from "./ui/button";

const LeftSideBar = () => {
  const { id, steps, setStep } = useProject();
  const [stepName, setStepName] = useState("");

  const addNewStep = () => {
    setStep({ id: "", project_id: id, name: stepName, nodes: [] });
    setStepName("");
  };

  return (
    <div className="flex w-[400px] p-1">
      <div className="flex flex-col w-[300px] border-r">
        <div className="flex gap-1">
          <input
            placeholder="Criar nova etapa"
            type="text"
            value={stepName}
            onChange={(e) => setStepName(e.target.value)}
            className="border-2 rounded-sm p-1 outline-none"
          />
          {
            <Button
              variant={"outline"}
              className="border-indigo-200 border-2 rounded-sm"
              onClick={() => addNewStep()}
            >
              <Plus />
            </Button>
          }
        </div>
        <div className="">
          <ul>
            {steps.map((step, index) => {
              return (
                <li key={index} className="p-2 flex items-center gap-1">
                  <StickyNote />
                  <span>{step.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col items-center w-[100px] pl-1 ${
          steps.length === 0 ? "hidden" : "block"
        }`}
      >
        <Button className="w-full" size={"sm"}>
          Container
        </Button>
      </div>
    </div>
  );
};

export default LeftSideBar;
