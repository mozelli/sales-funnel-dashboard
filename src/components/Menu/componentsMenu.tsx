import { SquareMousePointer, Type } from "lucide-react";

import { useFunnelStore } from "../../store/funnelState";
import { Node } from "../../types/Node";
import NodeAttributes from "./lib/NodeAttributes";

const ComponentsMenu = () => {
  const { currentStage, addNodeToStage, setCurrentNode } = useFunnelStore();

  const addNewNode = (type: string) => {
    const nodeAttributes = new NodeAttributes();

    const node: Node = {
      id: crypto.randomUUID(),
      type,
      attributes: {
        key: crypto.randomUUID(),
        class: nodeAttributes.set(type),
      },
      children: [],
    };
    addNodeToStage(currentStage, node);
    setCurrentNode(node.id);
  };

  return (
    <div className="flex flex-col p-1">
      <h1 className="font-bold text-sm text-slate-600 mb-2">Components</h1>
      <div className="flex items-center justify-around">
        <div
          className="
            flex 
            flex-col 
            gap-1 
            items-center 
            justify-center 
            border-2 
            border-dashed 
            border-slate-400 
            p-2 
            w-20
            cursor-pointer"
          onClick={() => addNewNode("title")}
        >
          <Type className="h-8 w-8" />
          <span className="text-xs">Title</span>
        </div>
        <div
          className="
          flex 
          flex-col 
          gap-1 
          items-center 
          justify-center 
          border-2 
          border-dashed 
          border-slate-400 
          p-2 
          w-20"
        >
          <SquareMousePointer className="h-8 w-8" />
          <span className="text-xs">Botão</span>
        </div>
      </div>
    </div>
  );
};

export default ComponentsMenu;
