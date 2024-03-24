import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";

export function createRouter({
  type,
  basePath,
}: {
  type: "browser" | "memory";
  basePath?: string;
}) {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes);
    case "memory":
      return createMemoryRouter(routes, { initialEntries: [basePath || "/"] });
  }
}
