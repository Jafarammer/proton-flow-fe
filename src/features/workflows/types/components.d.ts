export type WorkFlowStatus = "active" | "error" | "paused" | "draft";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface IWorkflowData {
  id: string;
  name: string;
  status: WorkflowStatus;
  trigger: string;
  lastRun: string;
}
