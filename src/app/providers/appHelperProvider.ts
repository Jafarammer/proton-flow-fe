// types
import type { IAppearanceSettings } from "../../features/settings/types/appearance";
// constants
import { appearanceInitialValues } from "../../features/settings/constants";

export const getInitialAppearance = (): IAppearanceSettings => {
  const saved = localStorage.getItem("appearance-settings");

  if (!saved) {
    return appearanceInitialValues;
  }

  try {
    return JSON.parse(saved) as IAppearanceSettings;
  } catch {
    return appearanceInitialValues;
  }
};

export const getSystemDarkMode = (): boolean => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
