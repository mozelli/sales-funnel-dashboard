import { useEffect, useState } from "react";

import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

import { useFunnelStore } from "../../store/funnelState";
import { TitleClass } from "../../types/Node";
import { useDashboardStore } from "../../store/dashboardState";

const EditTitle = () => {
  const {
    funnel,
    currentNode,
    currentStage,
    updateNodeAttributeClass,
    updateNodeAttributeTextContent,
  } = useFunnelStore();

  const { colors } = useDashboardStore();

  const [nodeClass, setNodeClass] = useState<TitleClass>({
    size: "",
    weight: "",
    letterSpacing: "",
    textAlign: "",
    color: "",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
  });
  const [textContent, setTextContent] = useState<string | undefined>("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [letterSpacing, setLetterSpacing] = useState("");
  const [textAlign, setTextAlign] = useState("");
  const [color, setColor] = useState("");
  const [paddingTop, setPaddingTop] = useState("");
  const [paddingRight, setPaddingRight] = useState("");
  const [paddingBottom, setPaddingBottom] = useState("");
  const [paddingLeft, setPaddingLeft] = useState("");

  useEffect(() => {
    const getClassAttribute = () => {
      funnel.stages.map((stage) => {
        if (stage.id === currentStage) {
          stage.nodes.map((node) => {
            if (
              node.id === currentNode &&
              node.attributes.class !== undefined
            ) {
              setTextContent(node.attributes.textContent);
              setNodeClass(node.attributes.class);
              setSize(node.attributes.class.size);
              setWeight(node.attributes.class.weight);
              setLetterSpacing(node.attributes.class.letterSpacing);
              setTextAlign(node.attributes.class.textAlign);
              setColor(node.attributes.class.color);
              setPaddingTop(node.attributes.class.paddingTop);
              setPaddingRight(node.attributes.class.paddingRight);
              setPaddingBottom(node.attributes.class.paddingBottom);
              setPaddingLeft(node.attributes.class.paddingLeft);
            }
          });
        }
      });
    };
    getClassAttribute();
  }, [currentNode, currentStage, funnel]);

  const handleTextContent = (textContent: string) => {
    setTextContent(textContent);
    updateNodeAttributeTextContent(currentStage, currentNode, textContent);
  };

  const handleSize = (size: string) => {
    setSize(size);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
      paddingTop: nodeClass.paddingTop,
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
      paddingTop: nodeClass.paddingTop,
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
      paddingTop: nodeClass.paddingTop,
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
      paddingTop: nodeClass.paddingTop,
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
      paddingTop: nodeClass.paddingTop,
    });
  };

  const handlePaddingTop = (paddingTop: string) => {
    setPaddingTop(paddingTop);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
      paddingTop,
    });
  };

  const handlePaddingRight = (paddingRight: string) => {
    setPaddingRight(paddingRight);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
      paddingTop: nodeClass.paddingTop,
      paddingRight,
    });
  };

  const handlePaddingBottom = (paddingBottom: string) => {
    setPaddingBottom(paddingBottom);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
      paddingTop: nodeClass.paddingTop,
      paddingRight: nodeClass.paddingRight,
      paddingBottom,
    });
  };

  const handlePaddingLeft = (paddingLeft: string) => {
    setPaddingLeft(paddingLeft);
    updateNodeAttributeClass(currentStage, currentNode, {
      ...nodeClass,
      size: nodeClass.size,
      weight: nodeClass.weight,
      letterSpacing: nodeClass.letterSpacing,
      textAlign: nodeClass.textAlign,
      color: nodeClass.color,
      paddingTop: nodeClass.paddingTop,
      paddingRight: nodeClass.paddingRight,
      paddingBottom: nodeClass.paddingBottom,
      paddingLeft,
    });
  };

  return (
    <ScrollArea className="w-full h-[500px] pl-1 pr-2">
      <div className="text-slate-600 text-xs font-bold m-1 text-center">
        Editar título
      </div>
      <Separator className="my-2" />
      <div className="flex flex-col items-center justify-between m-1">
        <label htmlFor="textContent" className="text-sm font-medium">
          Texto
        </label>
        <textarea
          className="border rounded-sm text-sm w-full p-1"
          id="textContent"
          value={textContent}
          onChange={(e) => {
            setTextContent(e.target.value);
            handleTextContent(e.target.value);
          }}
        >
          {textContent}
        </textarea>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between m-1">
        <label htmlFor="fontSize" className="text-sm font-medium">
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
        <label htmlFor="fontWeight" className="text-sm font-medium">
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
        <label htmlFor="letterSpacing" className="text-sm font-medium">
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
        <label htmlFor="textAlign" className="text-sm font-medium">
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
        <label htmlFor="textAlign" className="text-sm font-medium">
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
      <Separator className="my-2" />
      <div className="flex flex-col gap-2 m-1">
        <label htmlFor="textAlign" className="text-sm font-medium">
          Espaçamento
        </label>
        <div className="flex items-center justify-between">
          <label htmlFor="paddingTop" className="text-sm">
            Em cima
          </label>
          <select
            id="paddingTop"
            value={paddingTop}
            onChange={(e) => {
              setPaddingTop(e.target.value);
              handlePaddingTop(e.target.value);
            }}
          >
            <option value="pt-0">0px</option>
            <option value="pt-1">4px</option>
            <option value="pt-2">8px</option>
            <option value="pt-3">12px</option>
            <option value="pt-4">16px</option>
            <option value="pt-5">20px</option>
            <option value="pt-6">24px</option>
            <option value="pt-7">28px</option>
            <option value="pt-8">32px</option>
            <option value="pt-9">36px</option>
            <option value="pt-10">40px</option>
            <option value="pt-11">44px</option>
            <option value="pt-12">48px</option>
            <option value="pt-14">56px</option>
            <option value="pt-16">64px</option>
            <option value="pt-20">80px</option>
            <option value="pt-24">96px</option>
            <option value="pt-28">112px</option>
            <option value="pt-32">128px</option>
            <option value="pt-36">144px</option>
            <option value="pt-40">160px</option>
            <option value="pt-44">176px</option>
            <option value="pt-48">192px</option>
            <option value="pt-52">208px</option>
            <option value="pt-56">224px</option>
            <option value="pt-60">240px</option>
            <option value="pt-64">256px</option>
            <option value="pt-72">288px</option>
            <option value="pt-80">320px</option>
            <option value="pt-96">384px</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="paddingRight" className="text-sm">
            Direita
          </label>
          <select
            id="paddingRight"
            value={paddingRight}
            onChange={(e) => {
              setPaddingRight(e.target.value);
              handlePaddingRight(e.target.value);
            }}
          >
            <option value="pr-0">0px</option>
            <option value="pr-1">4px</option>
            <option value="pr-2">8px</option>
            <option value="pr-3">12px</option>
            <option value="pr-4">16px</option>
            <option value="pr-5">20px</option>
            <option value="pr-6">24px</option>
            <option value="pr-7">28px</option>
            <option value="pr-8">32px</option>
            <option value="pr-9">36px</option>
            <option value="pr-10">40px</option>
            <option value="pr-11">44px</option>
            <option value="pr-12">48px</option>
            <option value="pr-14">56px</option>
            <option value="pr-16">64px</option>
            <option value="pr-20">80px</option>
            <option value="pr-24">96px</option>
            <option value="pr-28">112px</option>
            <option value="pr-32">128px</option>
            <option value="pr-36">144px</option>
            <option value="pr-40">160px</option>
            <option value="pr-44">176px</option>
            <option value="pr-48">192px</option>
            <option value="pr-52">208px</option>
            <option value="pr-56">224px</option>
            <option value="pr-60">240px</option>
            <option value="pr-64">256px</option>
            <option value="pr-72">288px</option>
            <option value="pr-80">320px</option>
            <option value="pr-96">384px</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="paddingBottom" className="text-sm">
            Em baixo
          </label>
          <select
            id="paddingBottom"
            value={paddingBottom}
            onChange={(e) => {
              setPaddingBottom(e.target.value);
              handlePaddingBottom(e.target.value);
            }}
          >
            <option value="pb-0">0px</option>
            <option value="pb-1">4px</option>
            <option value="pb-2">8px</option>
            <option value="pb-3">12px</option>
            <option value="pb-4">16px</option>
            <option value="pb-5">20px</option>
            <option value="pb-6">24px</option>
            <option value="pb-7">28px</option>
            <option value="pb-8">32px</option>
            <option value="pb-9">36px</option>
            <option value="pb-10">40px</option>
            <option value="pb-11">44px</option>
            <option value="pb-12">48px</option>
            <option value="pb-14">56px</option>
            <option value="pb-16">64px</option>
            <option value="pb-20">80px</option>
            <option value="pb-24">96px</option>
            <option value="pb-28">112px</option>
            <option value="pb-32">128px</option>
            <option value="pb-36">144px</option>
            <option value="pb-40">160px</option>
            <option value="pb-44">176px</option>
            <option value="pb-48">192px</option>
            <option value="pb-52">208px</option>
            <option value="pb-56">224px</option>
            <option value="pb-60">240px</option>
            <option value="pb-64">256px</option>
            <option value="pb-72">288px</option>
            <option value="pb-80">320px</option>
            <option value="pb-96">384px</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="paddingLeft" className="text-sm">
            Esquerda
          </label>
          <select
            id="paddingLeft"
            value={paddingLeft}
            onChange={(e) => {
              setPaddingLeft(e.target.value);
              handlePaddingLeft(e.target.value);
            }}
          >
            <option value="pl-0">0px</option>
            <option value="pl-1">4px</option>
            <option value="pl-2">8px</option>
            <option value="pl-3">12px</option>
            <option value="pl-4">16px</option>
            <option value="pl-5">20px</option>
            <option value="pl-6">24px</option>
            <option value="pl-7">28px</option>
            <option value="pl-8">32px</option>
            <option value="pl-9">36px</option>
            <option value="pl-10">40px</option>
            <option value="pl-11">44px</option>
            <option value="pl-12">48px</option>
            <option value="pl-14">56px</option>
            <option value="pl-16">64px</option>
            <option value="pl-20">80px</option>
            <option value="pl-24">96px</option>
            <option value="pl-28">112px</option>
            <option value="pl-32">128px</option>
            <option value="pl-36">144px</option>
            <option value="pl-40">160px</option>
            <option value="pl-44">176px</option>
            <option value="pl-48">192px</option>
            <option value="pl-52">208px</option>
            <option value="pl-56">224px</option>
            <option value="pl-60">240px</option>
            <option value="pl-64">256px</option>
            <option value="pl-72">288px</option>
            <option value="pl-80">320px</option>
            <option value="pl-96">384px</option>
          </select>
        </div>
      </div>
    </ScrollArea>
  );
};

export default EditTitle;
