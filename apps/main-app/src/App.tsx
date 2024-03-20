import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
  <div className="container">
    <div>Name: main-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>

    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback="...loading">
        <Button
          onClick={() => {
            console.log("hit");
          }}
        >
          Primary
        </Button>
      </Suspense>
    </ErrorBoundary>

    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback="...loading">
        <Button type="warning">Warning</Button>
      </Suspense>
    </ErrorBoundary>
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
