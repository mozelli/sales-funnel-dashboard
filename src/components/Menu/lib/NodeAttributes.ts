//import { useFunnelStore } from "../../../store/funnelState";
//import { Node } from "../../../types/Node";

import { TitleClass } from "../../../types/Node";

class NodeAttributes {
  set(type: string): TitleClass {
    switch (type) {
      case "title":
        return {
          size: "text-2xl",
        };
      default:
        return {
          size: "",
        };
    }
  }
}

export default NodeAttributes;

/*const AddNewNode = (type: string) => {
  const { addNodeToStage, setCurrentNode, currentStage } = useFunnelStore();
  const node: Node = {
    id: crypto.randomUUID(),
    type,
    attributes: {
      key: crypto.randomUUID(),
      class: ["w-full"],
    },
    children: [],
  };
  addNodeToStage(currentStage, node);
  setCurrentNode(node.id);
};

export default AddNewNode;*/
