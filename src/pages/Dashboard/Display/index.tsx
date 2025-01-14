import { useEffect, useRef, useState } from "react";

import { Button } from "../../../components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { Terminal } from "lucide-react";

import { useFunnelStore } from "../../../store/funnelState";
import { useDashboardStore } from "../../../store/dashboardState";
import { Node } from "../../../types/Node";

const Display = () => {
  const { funnel, currentStage } = useFunnelStore();
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

  const stringfyAttributesClass = (node: Node) => {
    let result = "";
    //if (node.attributes.class !== undefined) {
    if (Array.isArray(node.attributes.class)) {
      const classArray = node.attributes.class;
      result = classArray.join(" ");
    }
    return result;
  };

  const componentConstructor = (node: Node) => {
    switch (node.type) {
      case "title":
        return (
          <div
            ref={addRef}
            onClick={() => {
              setActiveDiv(node.attributes.key);
              setMenu("editTitle");
            }}
            className={`text-2xl font-bold ${
              activeDiv === node.attributes.key
                ? "outline-dashed outline-cyan-300"
                : ""
            }`}
            key={node.attributes.key}
          >
            <h1
              className={`text-2xl font-bold ${stringfyAttributesClass(node)}`}
            >
              Título
            </h1>
          </div>
        );
        break;
      case "button":
        return <Button key={node.attributes.key}>Botão</Button>;
        break;
      case "alert":
        return (
          <div
            ref={addRef}
            onClick={() => setActiveDiv(node.attributes.key)}
            className={
              activeDiv === node.attributes.key
                ? "border-2 border-cyan-500 border-dashed"
                : ""
            }
            key={node.attributes.key}
          >
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Título</AlertTitle>
              <AlertDescription>Descrição</AlertDescription>
            </Alert>
          </div>
        );
        break;
      default:
        return "";
    }
  };

  return (
    <div className="flex-1 h-full bg-slate-100 pt-2 pb-2">
      <div className={`bg-white shadow h-full w-[900px] m-auto p-1`}>
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
