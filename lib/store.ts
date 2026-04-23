import { create } from "zustand";

export type AppId = "files" | "terminal" | "firefox" | "mail";

interface WindowState {
  openApps: AppId[];
  activeApp: AppId | null;
  zOrder: AppId[];
  openApp: (id: AppId) => void;
  closeApp: (id: AppId) => void;
  focusApp: (id: AppId) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  openApps: [],
  activeApp: null,
  zOrder: [],
  openApp: (id) =>
    set((state) => {
      const isOpen = state.openApps.includes(id);
      return {
        openApps: isOpen ? state.openApps : [...state.openApps, id],
        zOrder: [...state.zOrder.filter((a) => a !== id), id],
        activeApp: id,
      };
    }),
  closeApp: (id) =>
    set((state) => ({
      openApps: state.openApps.filter((a) => a !== id),
      zOrder: state.zOrder.filter((a) => a !== id),
      activeApp: state.activeApp === id ? null : state.activeApp,
    })),
  focusApp: (id) =>
    set((state) => ({
      zOrder: [...state.zOrder.filter((a) => a !== id), id],
      activeApp: id,
    })),
}));