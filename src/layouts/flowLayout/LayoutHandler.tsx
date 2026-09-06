import type { Dispatch, SetStateAction } from "react";
import useLayoutFlow from "../../hooks/useLayoutFlow";
import type { WorkflowNode } from "../../features/templates/types/templatePreview";

interface LayoutHandlerProps {
  setFlowNodes: Dispatch<SetStateAction<WorkflowNode[]>>;
}

const LayoutHandler = ({ setFlowNodes }: LayoutHandlerProps) => {
  useLayoutFlow(setFlowNodes);

  return null;
};

export default LayoutHandler;
