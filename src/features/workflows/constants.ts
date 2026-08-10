import type { MenuProps } from "antd";
import type { DropdownOption } from "./types/components";
import type { IWorkflowData } from "./types/components";

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
