export interface IOverviewStat {
  key: string;
  title: string;
  value: number;
  description: string;
}

export type WorkflowStatus = "active" | "draft" | "inactive";

export interface IRecentWorkflow {
  id: string;
  name: string;
  status: WorkflowStatus;
  updatedAt: string;
}

export interface IWorkflowActivity {
  month: string;
  total: number;
  active: number;
}

export interface IWorkflowStatusData {
  name: string;
  value: number;
  status: WorkflowStatus;
}
