import { useState } from "react";
import { useProject } from "../store/project";
import { Plus, StickyNote } from "lucide-react";
import { Button } from "./ui/button";

const LeftSideBar = () => {
  const { sections, setSection } = useProject();
  const [sectionName, setSectionName] = useState("");

  const addNewPage = () => {
    setSection(sectionName);
    setSectionName("");
  };
  return (
    <div className="w-[400px] p-1">
      <div className="flex gap-1">
        <input
          placeholder="Criar nova etapa"
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          className="border-2 rounded-sm p-1 outline-none"
        />
        <Button
          variant={"outline"}
          className="border-indigo-200 border-2 rounded-sm"
          onClick={() => addNewPage()}
        >
          <Plus />
        </Button>
      </div>
      <div className="">
        <ul>
          {sections.map((section, index) => {
            return (
              <li key={index} className="p-2 flex items-center gap-1">
                <StickyNote />
                <span>{section.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
