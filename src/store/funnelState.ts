import { create } from "zustand";

import { Node, TitleClass } from "../types/Node";
import { Stage } from "../types/Stage";
import { Funnel } from "../types/Funnel";

type FunnelState = {
  funnel: Funnel;
  updateFunnelName: (name: string) => void;
  addStage: (stage: Stage) => void;
  currentStage: string;
  setCurrentStage: (stageId: string) => void;
  addNodeToStage: (stageId: string, node: Node) => void;
  updateNodeAttributeClass: (
    stageId: string,
    nodeId: string,
    updatedClass: TitleClass
  ) => void;
  updateNodeAttributeTextContent: (
    stageId: string,
    nodeId: string,
    updatedTextContent: string
  ) => void;
  currentNode: string;
  setCurrentNode: (nodeId: string) => void;
};

export const useFunnelStore = create<FunnelState>((set) => ({
  funnel: {
    id: crypto.randomUUID(),
    name: "Meu funil",
    stages: [],
  },
  updateFunnelName: (name) =>
    set((state) => ({
      funnel: { ...state.funnel, name },
    })),
  addStage: (stage: Stage) =>
    set((state) => ({
      funnel: { ...state.funnel, stages: [...state.funnel.stages, stage] },
    })),
  currentStage: "",
  setCurrentStage: (stageId) =>
    set(() => ({
      currentStage: stageId,
    })),
  addNodeToStage: (stageId, node) =>
    set((state) => ({
      funnel: {
        ...state.funnel,
        stages: state.funnel.stages.map((stage) =>
          stage.id === stageId
            ? { ...stage, nodes: [...stage.nodes, node] }
            : stage
        ),
      },
    })),
  updateNodeAttributeClass: (stageId, nodeId, updatedClass) =>
    set((state) => ({
      funnel: {
        ...state.funnel,
        stages: state.funnel.stages.map((stage) =>
          stage.id === stageId
            ? {
                ...stage,
                nodes: stage.nodes.map((node) =>
                  node.id === nodeId
                    ? {
                        ...node,
                        attributes: {
                          ...node.attributes,
                          class: updatedClass,
                        },
                      }
                    : node
                ),
              }
            : stage
        ),
      },
    })),
  updateNodeAttributeTextContent: (stageId, nodeId, updatedTextContent) =>
    set((state) => ({
      funnel: {
        ...state.funnel,
        stages: state.funnel.stages.map((stage) =>
          stage.id === stageId
            ? {
                ...stage,
                nodes: stage.nodes.map((node) =>
                  node.id === nodeId
                    ? {
                        ...node,
                        attributes: {
                          ...node.attributes,
                          textContent: updatedTextContent,
                        },
                      }
                    : node
                ),
              }
            : stage
        ),
      },
    })),

  currentNode: "",
  setCurrentNode: (nodeId) =>
    set(() => ({
      currentNode: nodeId,
    })),
}));
