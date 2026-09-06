import { useLayoutEffect, type Dispatch, type SetStateAction } from "react";
import { useReactFlow } from "@xyflow/react";
import type { WorkflowNode } from "../features/templates/types/templatePreview";
import { layoutFlow } from "../utils/flowLayout";

const useLayoutFlow = (
  setFlowNodes: Dispatch<SetStateAction<WorkflowNode[]>>,
) => {
  const { getNodes, getEdges, fitView } = useReactFlow();

  useLayoutEffect(() => {
    const runLayout = async (): Promise<void> => {
      const nodes = getNodes();
      const edges = getEdges();

      const layoutedNodes = await layoutFlow(nodes, edges);

      setFlowNodes(layoutedNodes as WorkflowNode[]);

      requestAnimationFrame(() => {
        fitView({
          padding: 0.2,
          duration: 300,
        });
      });
    };

    runLayout();
  }, [getNodes, getEdges, fitView, setFlowNodes]);
};

export default useLayoutFlow;
