import { useState } from "react";
// types
import type { ThemeMode, IAppearanceSettings } from "../types/appearance";
// constants
import { appearanceInitialValues } from "../constants";

const useSettingsAppearance = () => {
  // useState
  const [appearance, setAppearance] = useState<IAppearanceSettings>(
    appearanceInitialValues,
  );
  // function
  const onChangeTheme = (theme: ThemeMode): void => {
    setAppearance((prev) => ({
      ...prev,
      theme,
    }));
  };
  const onChangePrimaryColor = (primaryColor: string): void => {
    setAppearance((prev) => ({
      ...prev,
      primaryColor,
    }));
  };
  const onChagneSecondaryColor = (secondaryColor: string): void => {
    setAppearance((prev) => ({
      ...prev,
      secondaryColor,
    }));
  };
  const onChangeBorderRadius = (borderRadius: number): void => {
    setAppearance((prev) => ({
      ...prev,
      borderRadius,
    }));
  };
  const onResetAppearance = (): void => {
    setAppearance(appearanceInitialValues);
  };
  const onSaveAppearance = (): void => {
    localStorage.setItem("appearance-settings", JSON.stringify(appearance));
    alert("Appearance settings saved");
  };

  return {
    appearance,
    onChangeTheme,
    onChangePrimaryColor,
    onChagneSecondaryColor,
    onChangeBorderRadius,
    onResetAppearance,
    onSaveAppearance,
  };
};

export default useSettingsAppearance;
