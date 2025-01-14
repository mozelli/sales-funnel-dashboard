import { create } from "zustand";

import { Node } from "../types/Node";
import { Stage } from "../types/Stage";
import { Funnel } from "../types/Funnel";

type FunnelState = {
  funnel: Funnel;
  updateFunnelName: (name: string) => void;
  addStage: (stage: Stage) => void;
  addNodeToStage: (stageId: string, node: Node) => void;
  currentStage: string;
  setCurrentStage: (stageId: string) => void;
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
  currentStage: "",
  setCurrentStage: (stageId) =>
    set(() => ({
      currentStage: stageId,
    })),
  currentNode: "",
  setCurrentNode: (nodeId) =>
    set(() => ({
      currentNode: nodeId,
    })),
}));
