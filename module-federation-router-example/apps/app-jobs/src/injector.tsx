import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

const inject = ({
  routerType,
  rootElement,
  basePath,
}: {
  routerType: "browser" | "memory";
  rootElement: HTMLElement;
  basePath?: string;
}) => {
  const router = createRouter({
    type: routerType,
    basePath,
  });

  const root = createRoot(rootElement);

  root.render(<RouterProvider router={router} />);

  return () => {
    queueMicrotask(() => root.unmount());
  };
};

export { inject };
