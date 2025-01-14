import { useEffect, useState } from "react";

import { Separator } from "../ui/separator";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
//import clsx from "clsx";
//import { cn } from "../../lib/utils";

import { useFunnelStore } from "../../store/funnelState";
import { TitleClass } from "../../types/Node";
import { useDashboardStore } from "../../store/dashboardState";
//import { TitleClass } from "../../types/Node";
//import { Attributes } from "../../types/Node";

const EditTitle = () => {
  const { funnel, currentNode, currentStage, updateNodeAttributeClass } =
    useFunnelStore();

  const { colors } = useDashboardStore();

  const [nodeClass, setNodeClass] = useState<TitleClass>({
    size: "",
    weight: "",
    letterSpacing: "",
    textAlign: "",
    color: "",
  });
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [letterSpacing, setLetterSpacing] = useState("");
  const [textAlign, setTextAlign] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const getClassAttribute = () => {
      funnel.stages.map((stage) => {
        if (stage.id === currentStage) {
          stage.nodes.map((node) => {
            if (
              node.id === currentNode &&
              node.attributes.class !== undefined
            ) {
              setNodeClass(node.attributes.class);
              setSize(node.attributes.class.size);
              setWeight(node.attributes.class.weight);
              setLetterSpacing(node.attributes.class.letterSpacing);
              setTextAlign(node.attributes.class.textAlign);
              setColor(node.attributes.class.color);
            }
          });
        }
      });
    };
    getClassAttribute();
  }, [currentNode, currentStage, funnel]);

  const handleSize = (size: string) => {
    setSize(size);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
    });
  };

  const handleWeight = (weight: string) => {
    setWeight(weight);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
    });
  };

  const handleLetterSpacing = (letterSpacing: string) => {
    setLetterSpacing(letterSpacing);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
    });
  };

  const handleTextAlign = (textAlign: string) => {
    setTextAlign(textAlign);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign,
      color: nodeClass.color,
    });
  };

  const handleColor = (color: string) => {
    setColor(color);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: `text-${color}`,
    });
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
      <Separator className="my-2" />
      <div className="flex items-center justify-between m-1">
        <label htmlFor="fontWeight" className="text-sm">
          Espessura
        </label>
        <select
          id="fontWeight"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
            handleWeight(e.target.value);
          }}
        >
          <option value="font-thin">Fina</option>
          <option value="font-extralight">Extra light</option>
          <option value="font-light">Light</option>
          <option value="font-normal">Normal</option>
          <option value="font-medium">Médio</option>
          <option value="font-semibold">Semi bold</option>
          <option value="font-bold">Bold</option>
          <option value="font-extrabold">Extra bold</option>
          <option value="font-black">Black</option>
        </select>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between m-1">
        <label htmlFor="letterSpacing" className="text-sm">
          Letter spacing
        </label>
        <select
          id="letterSpacing"
          value={letterSpacing}
          onChange={(e) => {
            setLetterSpacing(e.target.value);
            handleLetterSpacing(e.target.value);
          }}
        >
          <option value="tracking-tighter">-0.05em</option>
          <option value="tracking-tight">-0.025em</option>
          <option value="tracking-normal">0em</option>
          <option value="tracking-wide">0.025em</option>
          <option value="tracking-wider">0.05em</option>
          <option value="tracking-widest">0.1em</option>
        </select>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between m-1">
        <label htmlFor="textAlign" className="text-sm">
          Alinhamento
        </label>
        <div className="flex items-center gap-3">
          <AlignLeft
            className={`cursor-pointer hover:bg-slate-200 w-7 h-7 p-1 rounded-sm ${
              textAlign === "text-left" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTextAlign("text-left")}
          />
          <AlignCenter
            className={`cursor-pointer hover:bg-slate-200 w-7 h-7 p-1 rounded-sm ${
              textAlign === "text-center" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTextAlign("text-center")}
          />
          <AlignRight
            className={`cursor-pointer hover:bg-slate-200 w-7 h-7 p-1 rounded-sm ${
              textAlign === "text-right" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTextAlign("text-right")}
          />
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex flex-col m-1">
        <label htmlFor="textAlign" className="text-sm">
          Cor
        </label>
        <div
          className="flex items-center justify-between hover:bg-slate-200 p-1 rounded-sm cursor-pointer"
          onClick={() => handleColor(colors.primary)}
        >
          <label htmlFor="" className="text-sm">
            Primária
          </label>
          <span className={`w-4 h-4 rounded-full bg-${colors.primary}`}></span>
        </div>
        <div
          className="flex items-center justify-between hover:bg-slate-200 p-1 rounded-sm cursor-pointer"
          onClick={() => handleColor(colors.secondary)}
        >
          <label htmlFor="" className="text-sm">
            Secundária
          </label>
          <span
            className={`w-4 h-4 rounded-full bg-${colors.secondary}`}
          ></span>
        </div>
        <div
          className="flex items-center justify-between hover:bg-slate-200 p-1 rounded-sm cursor-pointer"
          onClick={() => handleColor(colors.text)}
        >
          <label htmlFor="" className="text-sm">
            Texto
          </label>
          <span className={`w-4 h-4 rounded-full bg-${colors.text}`}></span>
        </div>
        <div
          className="flex items-center justify-between hover:bg-slate-200 p-1 rounded-sm cursor-pointer"
          onClick={() => handleColor(colors.accent)}
        >
          <label htmlFor="" className="text-sm">
            Destaque
          </label>
          <span className={`w-4 h-4 rounded-full bg-${colors.accent}`}></span>
        </div>
      </div>
    </div>
  );
};

export default EditTitle;
