import type { Node } from "@xyflow/react";

export type WorkflowNodeType =
  | "trigger"
  | "ai"
  | "condition"
  | "knowledge"
  | "action"
  | "human";

export interface IWorkflowNodeData extends Record<string, unknown> {
  label: string;
  description: string;
  nodeType: WorkflowNodeType;
}

export type WorkflowNode = Node<IWorkflowNodeData, "workflowNode">;
