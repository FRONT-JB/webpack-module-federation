import { createRoot } from "react-dom/client";
import App, { AppProps } from "./App";
import React from "react";

export const inject = (parentElementId: string, props: AppProps) => {
  const root = createRoot(document.getElementById(parentElementId)!);
  root.render(<App {...props} />);

  return () => {
    root.unmount();
  };
};
