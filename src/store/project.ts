import { create } from "zustand";

type Funnel = {
  id: string;
  name: string;
  stages: Stage[];
};

type Stage = {
  id: string;
  name: string;
  nodes: Node[];
};

type Node = {
  id: string;
  type: string;
  attributes: {
    key: string;
    src?: string;
    alt?: string;
    href?: string;
    class?: string;
    textContent?: string;
  };
  children: Node[];
};

type FunnelState = {
  funnel: Funnel;
  updateFunnelName: (name: string) => void;
  addStage: (stage: Stage) => void;
  addNodeToStage: (stageId: string, node: Node) => void;
  currentStage: string;
  setCurrentStage: (stageId: string) => void;
};

export const userFunnelStore = create<FunnelState>((set) => ({
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
}));

/*export const useFunnel = create<Funnel>((set) => ({
  id: crypto.randomUUID(),
  name: "Project Name",
  stages: [],
  setStage: (stage) => 
    set((state) => ({
      stages: [
        ...state.stages,
      ]
    }))
}));

/*
 setProjectName: (projectName) =>
    set(() => ({
      name: projectName,
    })),
  steps: [],
  setStep: (step) =>
    set((state) => ({
      steps: [
        ...state.steps,
        {
          id: crypto.randomUUID(),
          name: step.name,
          nodes: [],
        },
      ],
    })),
  currentStep: "",
  setCurrentStep: (currentStep) =>
    set(() => ({
      currentStep,
    })),
 */
