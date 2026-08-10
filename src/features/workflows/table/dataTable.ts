import type { IWorkflowData } from "../types/components";

export const dataTableWorkflows: IWorkflowData[] = [
  {
    id: "wf_a1b2c3d4",
    name: "Customer Onboarding",
    status: "active",
    trigger: "Webhook",
    lastRun: "2 mins ago",
  },
  {
    id: "wf_e5f6g7h8",
    name: "Nightly Data Sync",
    status: "error",
    trigger: "Schedule",
    lastRun: "8 hrs ago",
  },
  {
    id: "wf_i9j0k1l2",
    name: "Invoice Generation",
    status: "paused",
    trigger: "Manual",
    lastRun: "Yesterday",
  },
  {
    id: "wf_m3n4o5p6",
    name: "Lead Scoring V2",
    status: "draft",
    trigger: "API Event",
    lastRun: "Never",
  },
  {
    id: "wf_m3n4orp6",
    name: "Invoice Generation",
    status: "active",
    trigger: "Schedule",
    lastRun: "Yesterday",
  },
];
