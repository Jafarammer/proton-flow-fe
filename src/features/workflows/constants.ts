import type { DropdownOption } from "../../types/dropdown";

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
