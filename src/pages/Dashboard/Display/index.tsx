import { useEffect, useRef, useState } from "react";

/*import { Button } from "../../../components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { Terminal } from "lucide-react";*/

import { useFunnelStore } from "../../../store/funnelState";
import { useDashboardStore } from "../../../store/dashboardState";
import { Node as MyNodeType } from "../../../types/Node";

const Display = () => {
  const { funnel, currentStage, setCurrentNode } = useFunnelStore();
  const { setMenu } = useDashboardStore();

  const [activeDiv, setActiveDiv] = useState<string | null>(null);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        divRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setActiveDiv(null);
        //setMenu("componentsMenu");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addRef = (ref: HTMLDivElement | null) => {
    if (ref && !divRefs.current.includes(ref)) {
      divRefs.current.push(ref);
    }
  };

  const stringfyAttributesClass = (node: MyNodeType) => {
    const classAttribute = node.attributes.class;
    let result = "";
    if (classAttribute !== undefined) {
      result = Object.values(classAttribute).join(" ");
    }
    return result;
  };

  const setActiveComponent = (nodeId: string, attributeKey: string) => {
    setActiveDiv(attributeKey);
    setCurrentNode(nodeId);
  };

  const componentConstructor = (node: MyNodeType) => {
    switch (node.type) {
      case "title":
        return (
          <div
            ref={addRef}
            onClick={() => {
              setActiveComponent(node.id, node.attributes.key);
              setMenu("editTitle");
            }}
            className={`text-2xl font-bold ${
              activeDiv === node.attributes.key
                ? "outline-dashed outline-cyan-300"
                : ""
            }`}
            key={node.attributes.key}
          >
            <h1 className={`${stringfyAttributesClass(node)}`}>
              {node.attributes.textContent}
            </h1>
          </div>
        );
        break;

      default:
        return "";
    }
  };

  return (
    <div className="flex-1 h-full bg-slate-100 pt-2 pb-2">
      <div className={`bg-white shadow h-full w-[360px] m-auto p-1`}>
        {currentStage !== ""
          ? funnel.stages.map((stage) =>
              stage.id === currentStage
                ? stage.nodes.map((node) => {
                    return componentConstructor(node);
                  })
                : ""
            )
          : ""}
      </div>
    </div>
  );
};

export default Display;
