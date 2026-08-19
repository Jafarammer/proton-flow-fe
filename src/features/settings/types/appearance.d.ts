import type { IconType } from "react-icons";

export type ThemeMode = "light" | "dark" | "system";

export interface IAppearanceSettings {
  theme: ThemeMode;
  primaryColor: string;
  secondaryColor: string;
  borderRadius: number;
}

export interface IThemeList {
  id: string;
  value: string;
  label: string;
  icon: IconType;
}
