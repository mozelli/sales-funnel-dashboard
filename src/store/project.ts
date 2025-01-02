import { create } from "zustand";

type Project = {
  id: string;
  name: string;
  setProjectName: (projectName: string) => void;
  steps: Step[];
  setStep: (step: Step) => void;
  currentStep: string;
};

type Step = {
  id: string;
  project_id: string;
  name: string;
  nodes: Node[];
};

type Node = {
  id: string;
  step_id: string;
  type: string;
  attributes: { class: string; textContent: string | null };
  children: Node | null;
};

export const useProject = create<Project>((set) => ({
  id: crypto.randomUUID(),
  name: "Project Name",
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
          project_id: step.project_id,
          name: step.name,
          nodes: [],
        },
      ],
    })),
  currentStep: "",
}));
