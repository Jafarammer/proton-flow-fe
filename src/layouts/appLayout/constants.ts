import type { MenuProps } from "antd";

export const headerListProfile: MenuProps["items"] = [
  {
    key: "profile",
    label: "Profile",
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: "Logout",
  },
];
