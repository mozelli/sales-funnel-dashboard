import { useEffect, useState } from "react";

import { Separator } from "../ui/separator";

import { useFunnelStore } from "../../store/funnelState";
//import { Attributes } from "../../types/Node";

const EditTitle = () => {
  const { funnel, currentNode, currentStage } = useFunnelStore();

  //const [attributes, setAttributes] = useState<Attributes | null>(null);
  const [width, setWidth] = useState<string | undefined>(undefined);

  useEffect(() => {
    const setWithDefaultValue = () => {
      funnel.stages.map((stage) => {
        if (stage.id === currentStage) {
          stage.nodes.map((node) => {
            if (
              node.id === currentNode &&
              Array.isArray(node.attributes.class)
            ) {
              const widthArray = ["w-full, w-6/12, 3/12"];
              node.attributes.class.forEach((element) => {
                if (widthArray.includes(element)) {
                  setWidth(element);
                }
              });
              //setWidth(node.attributes.class?.width);
            }
          });
        }
      });
    };
    setWithDefaultValue();
  }, [currentNode, currentStage, funnel]);

  return (
    <div className="">
      <div className="text-slate-600 text-xs font-bold m-1 text-center">
        Layout
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between m-1">
        <label htmlFor="contentWidth">Largura</label>
        <select
          name="layoutWidth"
          className="rounded-sm w-[80px] p-1"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        >
          <option value="w-full">100%</option>
          <option value="w-6/12">50%</option>
          <option value="w-3/12">25%</option>
        </select>
      </div>
    </div>
  );
};

export default EditTitle;
