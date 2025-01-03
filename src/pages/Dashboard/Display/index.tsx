import { useEffect, useRef, useState } from "react";

import { useFunnelStore } from "../../../store/project";
import { Button } from "../../../components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { Terminal } from "lucide-react";

type Attributes = {
  key: string;
  src?: string;
  alt?: string;
  href?: string;
  class?: string;
  textContent?: string;
};

const Display = () => {
  const { funnel, currentStage } = useFunnelStore();
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

  const componentConstructor = (type: string, attributes: Attributes) => {
    switch (type) {
      case "button":
        return <Button key={attributes.key}>Botão</Button>;
      case "alert":
        return (
          <div
            ref={addRef}
            onClick={() => setActiveDiv(attributes.key)}
            className={
              activeDiv === attributes.key
                ? "border-2 border-cyan-500 border-dashed"
                : ""
            }
            key={attributes.key}
          >
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Título</AlertTitle>
              <AlertDescription>Descrição</AlertDescription>
            </Alert>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="flex-1 h-full bg-slate-100 pt-2 pb-2">
      <div className={`bg-white shadow h-full w-[430px] m-auto p-1`}>
        {currentStage !== ""
          ? funnel.stages.map((stage) =>
              stage.id === currentStage
                ? stage.nodes.map((node) => {
                    return componentConstructor(node.type, node.attributes);
                  })
                : ""
            )
          : ""}
      </div>
    </div>
  );
};

export default Display;
