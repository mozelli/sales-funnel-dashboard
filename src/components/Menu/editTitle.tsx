import { useEffect, useState } from "react";

import { Separator } from "../ui/separator";

import { useFunnelStore } from "../../store/funnelState";
//import { TitleClass } from "../../types/Node";
//import { Attributes } from "../../types/Node";

const EditTitle = () => {
  const { funnel, currentNode, currentStage, updateNodeAttributeClass } =
    useFunnelStore();

  const [nodeClass, setNodeClass] = useState({});
  const [size, setSize] = useState("");

  useEffect(() => {
    const getClassAttribute = () => {
      funnel.stages.map((stage) => {
        if (stage.id === currentStage) {
          stage.nodes.map((node) => {
            if (
              node.id === currentNode &&
              node.attributes.class !== undefined
            ) {
              setSize(node.attributes.class.size);
              setNodeClass(node.attributes.class);
            }
          });
        }
      });
    };
    getClassAttribute();
  }, [currentNode, currentStage, funnel]);

  const handleSize = (size: string) => {
    setSize(size);
    updateNodeAttributeClass(currentStage, currentNode, { ...nodeClass, size });
  };

  return (
    <div className="">
      <div className="text-slate-600 text-xs font-bold m-1 text-center">
        Editar título
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between m-1">
        <label htmlFor="fontSize" className="text-sm">
          Tamanho
        </label>
        <select
          id="fontSize"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
            handleSize(e.target.value);
          }}
        >
          <option value="text-xs">12px</option>
          <option value="text-sm">14px</option>
          <option value="text-base">16px</option>
          <option value="text-lg">18px</option>
          <option value="text-xl">20px</option>
          <option value="text-2xl">24px</option>
          <option value="text-3xl">30px</option>
          <option value="text-4xl">36px</option>
          <option value="text-5xl">48px</option>
          <option value="text-6xl">60px</option>
          <option value="text-7xl">72px</option>
          <option value="text-8xl">96px</option>
          <option value="text-9xl">128px</option>
        </select>
      </div>
    </div>
  );
};

export default EditTitle;
