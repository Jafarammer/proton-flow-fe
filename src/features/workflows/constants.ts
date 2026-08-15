import type { MenuProps } from "antd";
import { LuFilePlus2, LuLayers3 } from "react-icons/lu";
import type {
  DropdownOption,
  IWorkflowData,
  IStartingPointList,
} from "./types/components";

export const workflowStatusOptions: DropdownOption[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "draft",
    label: "Draft",
  },
  {
    value: "error",
    label: "Error",
  },
  {
    value: "paused",
    label: "Paused",
  },
];

export const workflowTriggerOptions: DropdownOption[] = [
  {
    value: "any",
    label: "Any",
  },
  {
    value: "api_event",
    label: "API Event",
  },
  {
    value: "manual",
    label: "Manual",
  },
  {
    value: "schedule",
    label: "Schedule",
  },
  {
    value: "webhook",
    label: "Webhook",
  },
];

export const workflowSortOptions: DropdownOption[] = [
  {
    value: "last-modified",
    label: "Last Modified",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "created-at",
    label: "Created At",
  },
];

export const toMenuItems = (options: DropdownOption[]): MenuProps["items"] => {
  return options.map((item) => ({
    key: item.value,
    label: item.label,
  }));
};

export const statusColorTable: Record<IWorkflowData["status"], string> = {
  active: "green",
  error: "red",
  paused: "orange",
  draft: "default",
};

export const startingPointList: IStartingPointList[] = [
  {
    id: "blank",
    value: "blank",
    title: "Start from Scratch",
    description: "Open a blank canvas and build your workflow node by node.",
    icon: LuFilePlus2,
  },
  {
    id: "template",
    value: "template",
    title: "Start from Template",
    description:
      "Use a ready-made workflow template and customize it for your needs.",
    icon: LuLayers3,
  },
];
