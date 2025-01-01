import { create } from "zustand";

type Project = {
  name: string;
  sections: Section[];
  setName: (text: string) => void;
  setSection: (text: string) => void;
};

type Section = {
  name: string;
};

export const useProject = create<Project>((set) => ({
  name: "Novo projeto",
  sections: [],
  setName: (text) =>
    set(() => ({
      name: text,
    })),
  setSection: (text: string) =>
    set((state) => ({
      sections: [...state.sections, { name: text }],
    })),
}));
