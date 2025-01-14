import { create } from "zustand";

type DashboardState = {
  menu: string;
  setMenu: (menu: string) => void;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
};

export const useDashboardStore = create<DashboardState>((set) => ({
  menu: "",
  colors: {
    primary: "sky-500",
    secondary: "gray-700",
    text: "gray-900",
    accent: "amber-400",
  },
  setMenu: (menu) =>
    set(() => ({
      menu,
    })),
}));
