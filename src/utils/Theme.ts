import type { ThemeConfig } from "antd";

export const baseTheme: ThemeConfig = {
  cssVar: {
    prefix: "ant",
    key: "proton-flow",
  },

  token: {
    fontFamily: "Ubuntu, sans-serif",
  },
  components: {
    Layout: {
      siderBg: "#141414",
    },

    Menu: {
      darkItemBg: "#141414",
      darkSubMenuItemBg: "#141414",
      darkItemColor: "#D4D4D8",
      darkItemHoverBg: "#1F1F1F",
      darkItemHoverColor: "#4F46E5",
      darkItemSelectedBg: "#27272A",
      darkItemSelectedColor: "#4F46E5",
    },
  },
};
