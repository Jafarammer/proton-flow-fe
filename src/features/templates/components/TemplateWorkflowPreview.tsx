import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
} from "@xyflow/react";
import WorkflowNode from "./WorkflowNode";
// type
import type { WorkflowNode as WorkflowNodeType } from "../types/templatePreview";
import type { Edge, ProOptions } from "@xyflow/react";
// contstants
import {
  customerSupportEdges,
  customerSupportNodes,
  defaultEdges,
  defaultNodes,
} from "../contstants";
// styles
import "./styles/template_workflow_preview.scss";
import "@xyflow/react/dist/style.css";

interface TemplateWorkflowPreviewProps {
  templateId: string;
}

const proOptions: ProOptions = { account: "paid-pro", hideAttribution: true };

const nodeTypes = {
  workflowNode: WorkflowNode,
};

const TemplateWorkflowPreview = ({
  templateId,
}: TemplateWorkflowPreviewProps) => {
  let nodes: WorkflowNodeType[] = defaultNodes;
  let edges: Edge[] = defaultEdges;

  switch (templateId) {
    case "customer-support":
      nodes = customerSupportNodes;
      edges = customerSupportEdges;
      break;
    default:
      nodes = defaultNodes;
      edges = defaultEdges;
      break;
  }

  return (
    <div className="template-workflow-preview">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        nodesFocusable={false}
        panOnDrag
        zoomOnScroll
        proOptions={proOptions}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        defaultEdgeOptions={{
          style: {
            stroke: "var(--ant-color-border)",
            strokeWidth: 1.5,
          },
        }}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />

        <Controls showInteractive={false} position="bottom-right" />
      </ReactFlow>
    </div>
  );
};

export default TemplateWorkflowPreview;
