import { useState } from "react";
import { useProject } from "../store/project";
import { Button } from "./ui/button";

const LeftSideBar = () => {
  const { sections, setSection } = useProject();
  const [sectionName, setSectionName] = useState("");

  const addNewPage = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setSection(sectionName);
      setSectionName("");
    }
  };
  console.log(name);
  return (
    <div className="w-[400px]">
      <div className="">
        <input
          placeholder="Criar nova págia"
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          onKeyDown={(e) => addNewPage(e)}
        />
      </div>
      <div className="">
        <ul>
          {sections.map((section, index) => {
            return <li key={index}>{section.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
