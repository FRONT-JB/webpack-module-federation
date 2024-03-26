import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import DynamicButton from "./components/DynamicButton";

const App = () => {
  const [button, setButton] = useState<{
    url?: string;
    scope?: string;
    module?: string;
  }>({});

  function setButtonFromComponentApp1() {
    setButton({
      url: "http://localhost:3001",
      scope: "component_app1",
      module: "./Button",
    });
  }

  function setButtonFromComponentApp2() {
    setButton({
      url: "http://localhost:3002",
      scope: "component_app2",
      module: "./Button",
    });
  }

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>

      <button type="button" onClick={setButtonFromComponentApp1}>
        Load Component App 1 Button
      </button>

      <button type="button" onClick={setButtonFromComponentApp2}>
        Load Component App 2 Button
      </button>

      <div>
        <DynamicButton button={button} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
