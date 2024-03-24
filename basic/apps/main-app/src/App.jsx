import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { join, map } from "lodash";

import "./index.css";

import { NameProvider } from "shared-library";
import { ErrorBoundary } from "react-error-boundary";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
  <NameProvider name="hello">
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <div>{join(map(["1", "2"]), "-")}</div>

      <ErrorBoundary fallback={<div>Error 1</div>}>
        <Suspense fallback="...loading">
          <Button
            onClick={() => {
              console.log("Clicked!!");
            }}
          >
            Primary
          </Button>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error 2</div>}>
        <Suspense fallback="...loading">
          <Button type="warning">Warning</Button>
        </Suspense>
      </ErrorBoundary>
    </div>
  </NameProvider>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
