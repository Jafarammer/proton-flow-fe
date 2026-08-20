import { useEffect, useState, createContext, useContext } from "react";
// antd
import { ConfigProvider, theme } from "antd";
// types
import type { ReactNode } from "react";
import type { IAppearanceSettings } from "../../features/settings/types/appearance";
// helper
import { getInitialAppearance, getSystemDarkMode } from "./appHelperProvider";
// utils
import { baseTheme } from "../../utils/Theme";

interface AppThemeContextProps {
  appearance: IAppearanceSettings;
  updateAppearance: (value: IAppearanceSettings) => void;
}

const AppThemeContext = createContext<AppThemeContextProps | null>(null);

interface AppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  // useState
  const [appearance, setAppearance] =
    useState<IAppearanceSettings>(getInitialAppearance);
  const [systemDark, setSystemDark] = useState<boolean>(getSystemDarkMode);
  // useEffect
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChangeSystemTheme = (event: MediaQueryListEvent): void => {
      setSystemDark(event.matches);
    };

    media.addEventListener("change", onChangeSystemTheme);

    return () => {
      media.removeEventListener("change", onChangeSystemTheme);
    };
  }, []);

  // config
  const isDark =
    appearance.theme === "dark" ||
    (appearance.theme === "system" && systemDark);

  const updateAppearance = (values: IAppearanceSettings): void => {
    setAppearance(values);
    localStorage.setItem("appearance-settings", JSON.stringify(values));
  };

  return (
    <AppThemeContext.Provider value={{ appearance, updateAppearance }}>
      <ConfigProvider
        theme={{
          ...baseTheme,
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            ...baseTheme.token,
            colorPrimary: appearance.primaryColor,
            colorInfo: appearance.primaryColor,
            borderRadius: appearance.borderRadius,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used inside AppThemeProvider");
  }

  return context;
};
