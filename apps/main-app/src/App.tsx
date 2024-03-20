import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const elementId = "isolated-app";

const App = () => {
  useEffect(() => {
    let unmount: () => void = () => {};

    import("isolated_app/injector").then(({ inject }) => {
      unmount = inject(elementId, { name: "main-app" });
    });

    return () => {
      unmount();
    };
  }, []);

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>

      <div id={elementId} />
    </div>
  );
};

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
