import { Handle, Position } from "@xyflow/react";
// type
import type { NodeProps } from "@xyflow/react";
import type { WorkflowNode as WorkflowNodeType } from "../types/templatePreview";
// icon
import { TbApi } from "react-icons/tb";
import { FaRobot, FaBook, FaUser } from "react-icons/fa6";
import { MdApartment, MdMessage } from "react-icons/md";
// styles
import "./styles/workflow_node.scss";

const WorkflowNode = ({ data }: NodeProps<WorkflowNodeType>) => {
  const getIcon = () => {
    switch (data.nodeType) {
      case "trigger":
        return <TbApi />;
      case "condition":
        return <MdApartment />;
      case "knowledge":
        return <FaBook />;
      case "human":
        return <FaUser />;
      case "action":
        return <MdMessage />;
      default:
        return <FaRobot />;
    }
  };

  return (
    <div className={`workflow-node workflow-node--${data.nodeType}`}>
      <Handle
        type="target"
        position={Position.Left}
        className="workflow-node__handle"
      />

      <div className="workflow-node__icon">{getIcon()}</div>

      <div className="workflow-node__content">
        <div className="workflow-node__label">{data.label}</div>
        <div className="workflow-node__description">{data.description}</div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="workflow-node__handle"
      />
    </div>
  );
};

export default WorkflowNode;
