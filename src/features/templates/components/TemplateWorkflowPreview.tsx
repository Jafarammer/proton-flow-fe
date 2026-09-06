import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useNodesState,
} from "@xyflow/react";
import WorkflowNode from "./WorkflowNode";
// type
import type { WorkflowNode as WorkflowNodeType } from "../types/templatePreview";
import type { Edge, ProOptions } from "@xyflow/react";
// components layout
import LayoutHandler from "../../../layouts/flowLayout/LayoutHandler";
// styles
import "./styles/template_workflow_preview.scss";
import "@xyflow/react/dist/style.css";

interface TemplateWorkflowPreviewProps {
  nodes: WorkflowNodeType[];
  edges: Edge[];
}

const proOptions: ProOptions = { account: "paid-pro", hideAttribution: true };

const nodeTypes = {
  workflowNode: WorkflowNode,
};

const TemplateWorkflowPreview = ({
  nodes,
  edges,
}: TemplateWorkflowPreviewProps) => {
  const [flowNodes, setFlowNodes, onNodesChange] =
    useNodesState<WorkflowNodeType>(nodes);

  return (
    <div className="template-workflow-preview">
      <ReactFlow
        nodes={flowNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag
        zoomOnScroll
        proOptions={proOptions}
      >
        <LayoutHandler setFlowNodes={setFlowNodes} />

        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />

        <Controls showInteractive={false} position="bottom-right" />
      </ReactFlow>
    </div>
  );
};

export default TemplateWorkflowPreview;
