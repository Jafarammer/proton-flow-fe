import type { IAppearanceSettings, IThemeList } from "./types/appearance";
// icon
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";

export const primaryColorOptions = [
  "#4F46E5",
  "#2563EB",
  "#0F766E",
  "#16A34A",
  "#EA580C",
  "#DC2626",
];

export const secondaryColorOptions = [
  "#64748B",
  "#475569",
  "#334155",
  "#7C3AED",
  "#0891B2",
  "#CA8A04",
];

export const radiusOptions = [
  {
    label: "Small",
    value: 6,
  },
  {
    label: "Medium",
    value: 10,
  },
  {
    label: "Large",
    value: 16,
  },
];

export const appearanceInitialValues: IAppearanceSettings = {
  theme: "light",
  primaryColor: "#4F46E5",
  secondaryColor: "#64748B",
  borderRadius: 10,
};

export const themeList: IThemeList[] = [
  {
    id: "light",
    value: "light",
    label: "Light",
    icon: LuSun,
  },
  {
    id: "dark",
    value: "dark",
    label: "Dark",
    icon: LuMoon,
  },
  {
    id: "system",
    value: "system",
    label: "System",
    icon: LuMonitor,
  },
];
