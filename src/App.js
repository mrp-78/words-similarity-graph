import React from "react";
import links from "./data/linkes.json";
import nodes from "./data/nodes.json";
import { ForceGraph } from "./components/forceGraph";
import "./App.css";

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  console.log(nodes);
  return (
    <div className="App">
      <header className="App-header">Force Graph Example</header>
      <section className="Main">
        <ForceGraph
          linksData={links}
          nodesData={nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section>
    </div>
  );
}

export default App;
