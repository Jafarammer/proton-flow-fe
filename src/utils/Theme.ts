import type { ThemeConfig } from "antd";

export const baseTheme: ThemeConfig = {
  cssVar: {
    prefix: "ant",
    key: "proton-flow",
  },

  token: {
    colorSuccess: "#16A34A",
    colorWarning: "#F59E0B",
    colorError: "#DC2626",

    colorText: "#0F172A",
    colorTextSecondary: "#64748B",

    colorBgBase: "#FFFFFF",
    colorBgContainer: "#FFFFFF",
    colorBgLayout: "#F8FAFC",

    colorBorder: "#CBD5E1",
    colorBorderSecondary: "#E2E8F0",

    fontFamily: "Ubuntu, sans-serif",
  },
};
