//import React from "react";
import { useProject } from "../../../store/project";

const Display = () => {
  const { sections } = useProject();

  function SelectTags() {
    if (sections.length > 0) {
      sections.map((section) => {
        section.content.map((tag) => {
          if (tag.type === "container")
            return <div className={tag.attributes}>Display</div>;
          else return <div className="">Display no container</div>;
        });
      });
    } else {
      return <div className="empty">Display</div>;
    }
    /*sections.map((section) => {
      section.content.map((tag) => {
        if(tag.type === "container")
          return <div className={tag.attributes}></div>
        else return <div className=""></div>
      })
    })*/
  }

  return (
    <div className="flex-1 h-full bg-slate-100 pt-2 pb-2">
      <div className={`bg-white shadow h-full w-[430px] m-auto`}>
        <SelectTags />
      </div>
    </div>
  );
};

export default Display;
