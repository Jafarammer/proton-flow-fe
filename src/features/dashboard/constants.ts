import type {
  IOverviewStat,
  IWorkflowActivity,
  IWorkflowStatusData,
  // IRecentWorkflow,
  // WorkflowStatus,
} from "./types/overview";

export const overviewStats: IOverviewStat[] = [
  {
    key: "total-workflows",
    title: "Total Workflows",
    value: 12,
    description: "+3 this month",
  },
  {
    key: "active-workflows",
    title: "Active Workflows",
    value: 8,
    description: "Currently active",
  },
  {
    key: "templates",
    title: "Templates",
    value: 4,
    description: "Ready to use",
  },
  {
    key: "integrations",
    title: "Integrations",
    value: 3,
    description: "2 connected",
  },
];

export const workflowActivityData: IWorkflowActivity[] = [
  {
    month: "Apr",
    total: 2,
    active: 1,
  },
  {
    month: "May",
    total: 4,
    active: 3,
  },
  {
    month: "Jun",
    total: 5,
    active: 4,
  },
  {
    month: "Jul",
    total: 7,
    active: 5,
  },
  {
    month: "Aug",
    total: 9,
    active: 7,
  },
  {
    month: "Sep",
    total: 12,
    active: 8,
  },
];

export const workflowStatusData: IWorkflowStatusData[] = [
  {
    name: "Active",
    value: 8,
    status: "active",
  },
  {
    name: "Draft",
    value: 3,
    status: "draft",
  },
  {
    name: "Inactive",
    value: 1,
    status: "inactive",
  },
];
