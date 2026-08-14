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

export interface ICreateWorkflowForm {
  name: string;
  description: string;
  trigger: "manual" | "webhook" | "schedule";
  startingPoint: "blank" | "template";
}
