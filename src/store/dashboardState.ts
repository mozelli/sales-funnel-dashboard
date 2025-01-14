import { create } from "zustand";

type DashboardState = {
  menu: string;
  setMenu: (menu: string) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  menu: "",
  setMenu: (menu) =>
    set(() => ({
      menu,
    })),
}));
