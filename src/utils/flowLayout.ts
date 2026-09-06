import ELK from "elkjs/lib/elk.bundled";
import type { Edge, Node } from "@xyflow/react";

const elk = new ELK();

const elkOptions = {
  "elk.algorithm": "layered",
  "elk.direction": "RIGHT",
  "elk.spacing.nodeNode": "80",
  "elk.layered.spacing.nodeNodeBetweenLayers": "120",
  "elk.layered.nodePlacement.strategy": "BRANDES_KOEPF",
  "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
};

export const layoutFlow = async (
  nodes: Node[],
  edges: Edge[],
): Promise<Node[]> => {
  if (nodes.length === 0) {
    return [];
  }

  const graph = {
    id: "root",
    layoutOptions: elkOptions,
    children: nodes.map((node) => ({
      id: node.id,
      width: node.measured?.width ?? node.initialWidth ?? 220,
      height: node.measured?.height ?? node.initialHeight ?? 72,
    })),

    edges: edges.map((edge) => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  };

  const layoutedGraph = await elk.layout(graph);

  return nodes.map((node) => {
    const layoutedNode = layoutedGraph.children?.find(
      (item) => item.id === node.id,
    );

    return {
      ...node,

      position: {
        x: layoutedNode?.x ?? 0,
        y: layoutedNode?.y ?? 0,
      },
    };
  });
};
