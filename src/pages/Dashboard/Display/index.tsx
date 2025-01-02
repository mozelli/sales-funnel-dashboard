import { userFunnelStore } from "../../../store/project";
import { Button } from "../../../components/ui/button";

type Attributes = {
  key: string;
  src?: string;
  alt?: string;
  href?: string;
  class?: string;
  textContent?: string;
};

const Display = () => {
  const { funnel, currentStage } = userFunnelStore();

  const componentConstructor = (type: string, attributes: Attributes) => {
    switch (type) {
      case "button":
        return <Button key={attributes.key}>Botão</Button>;
      default:
        return "";
    }
  };

  return (
    <div className="flex-1 h-full bg-slate-100 pt-2 pb-2">
      <div className={`bg-white shadow h-full w-[430px] m-auto`}>
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
