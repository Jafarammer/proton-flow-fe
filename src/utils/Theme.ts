import type { ThemeConfig } from "antd";

const primary = "#4F46E5";
const primaryLight = "#EEF2FF";

export const appTheme: ThemeConfig = {
  cssVar: {
    prefix: "ant",
    key: "proton-flow",
  },

  token: {
    /* Primary */
    colorPrimary: primary,
    colorInfo: primary,

    /* Status */
    colorSuccess: "#16A34A",
    colorWarning: "#F59E0B",
    colorError: "#DC2626",

    /* Text */
    colorText: "#0F172A",
    colorTextSecondary: "#64748B",

    /* Background */
    colorBgBase: "#FFFFFF",
    colorBgContainer: "#FFFFFF",
    colorBgLayout: "#F8FAFC",

    /* Border */
    colorBorder: "#CBD5E1",
    colorBorderSecondary: "#E2E8F0",

    /* Hover */
    controlItemBgHover: primaryLight,

    /* Shape */
    borderRadius: 10,

    /* Font */
    fontFamily: "Ubuntu, sans-serif",
  },

  // components: {
  //   Menu: {
  //     itemColor: "#0F172A",

  //     itemHoverBg: primaryLight,
  //     itemHoverColor: primary,

  //     itemSelectedBg: primaryLight,
  //     itemSelectedColor: primary,
  //   },
  // },
};
