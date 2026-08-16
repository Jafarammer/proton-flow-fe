import type { IconType } from "react-icons";

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

export interface IStartingPointList {
  id: string;
  value: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface ITriggerList {
  id: string;
  value: string;
  title: string;
  description: string;
  icon: IconType;
}
