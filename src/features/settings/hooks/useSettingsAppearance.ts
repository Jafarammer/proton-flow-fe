import { useState } from "react";
// types
import type { ThemeMode, IAppearanceSettings } from "../types/appearance";
// constants
import { appearanceInitialValues } from "../constants";
// app
import { useAppTheme } from "../../../app/providers/AppThemeProvider";

const useSettingsAppearance = () => {
  // context
  const { appearance: currentAppearance, updateAppearance } = useAppTheme();

  // useState
  const [appearance, setAppearance] = useState<IAppearanceSettings>(
    currentAppearance ?? appearanceInitialValues,
  );

  // functions
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

  const onChangeSecondaryColor = (secondaryColor: string): void => {
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
    updateAppearance(appearance);

    alert("Appearance settings saved");
  };

  return {
    appearance,

    onChangeTheme,
    onChangePrimaryColor,
    onChangeSecondaryColor,
    onChangeBorderRadius,

    onResetAppearance,
    onSaveAppearance,
  };
};

export default useSettingsAppearance;
