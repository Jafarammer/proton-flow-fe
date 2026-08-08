import type { MenuProps } from "antd";
import type { DropdownOption } from "../types/dropdown";

export const toMenuItems = (options: DropdownOption[]): MenuProps["items"] => {
  return options.map((item) => ({
    key: item.value,
    label: item.label,
  }));
};
