import React from "react";
import { runForceGraph } from "./forceGraphGenerator";
import "./forceGraph.css";

export function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;
    if (containerRef.current) {
      const { destroy } = runForceGraph(
        containerRef.current,
        linksData,
        nodesData,
        nodeHoverTooltip
      );
      destroyFn = destroy;
    }
    return destroyFn;
  }, [linksData, nodesData, nodeHoverTooltip]);

  return <div ref={containerRef} className="container" />;
}
