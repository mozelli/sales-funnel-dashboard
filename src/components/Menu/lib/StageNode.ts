//import { useFunnelStore } from "../../../store/funnelState";
//import { Node } from "../../../types/Node";

import { TitleClass } from "../../../types/Node";

class StageNode {
  /*setAttributes(type: string): Attributes {
    switch(type) {
      case "title":
        return {

        }
    }
  }*/

  setTitleClass(type: string): TitleClass {
    switch (type) {
      case "title":
        return {
          size: "text-2xl",
          weight: "font-bold",
          letterSpacing: "tracking-normal",
          textAlign: "text-left",
          color: "text-gray-900",
          paddingTop: "p-0",
          paddingRight: "pr-0",
          paddingBottom: "pb-0",
          paddingLeft: "pl-0",
        };
      default:
        return {
          size: "",
          weight: "",
          letterSpacing: "",
          textAlign: "",
          color: "",
          paddingTop: "",
          paddingRight: "",
          paddingBottom: "",
          paddingLeft: "",
        };
    }
  }
}

export default StageNode;

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
