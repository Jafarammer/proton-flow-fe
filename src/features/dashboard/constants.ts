import type {
  IOverviewStat,
  // IRecentWorkflow,
  // IWorkflowActivity,
  // IWorkflowStatusData,
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
