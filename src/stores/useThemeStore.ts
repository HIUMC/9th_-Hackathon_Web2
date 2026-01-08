import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark";

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      setMode: (mode) => {
        set({ mode });
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", mode === "dark");
        }
      },
    }),
    {
      name: "theme-mode",
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", state.mode === "dark");
        }
      },
    }
  )
);
