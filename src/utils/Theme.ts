import type { ThemeConfig } from "antd";

const primary = "#4F46E5";
const primaryLight = "#EEF2FF";

export const appTheme: ThemeConfig = {
  token: {
    colorPrimary: primary,
    colorInfo: primary,
    colorSuccess: "#16A34A",
    colorWarning: "#F59E0B",
    colorError: "#DC2626",
    colorText: "#0F172A",
    colorTextSecondary: "#64748B",
    colorBgBase: "#FFFFFF",
    colorBgContainer: "#FFFFFF",
    colorBorder: "#CBD5E1",
    // popup/dropdown item
    controlItemBgHover: primaryLight,
    borderRadius: 10,
    fontFamily: "Ubuntu, sans-serif",
  },
  components: {
    Menu: {
      // normal
      itemColor: "#0F172A",
      // hover
      itemHoverBg: primaryLight,
      itemHoverColor: primary,
      // active / selected
      itemSelectedBg: primaryLight,
      itemSelectedColor: primary,
    },
  },
};
