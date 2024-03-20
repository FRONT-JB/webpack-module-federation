import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { join, map } from "lodash";

import "./index.css";

import { NameProvider } from "shared-library";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
  <NameProvider name="hello">
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <div>{join(map(["1", "2"]), "-")}</div>
      <Suspense fallback="...loading">
        <Button
          onClick={() => {
            console.log("Clicked!!");
          }}
        >
          Primary
        </Button>
      </Suspense>
      <Suspense fallback="...loading">
        <Button type="warning">Warning</Button>
      </Suspense>
    </div>
  </NameProvider>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
