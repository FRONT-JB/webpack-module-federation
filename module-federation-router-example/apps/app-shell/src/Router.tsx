import React, { Suspense } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import { appJobsPrefix, appNetworkPrefix } from "./constants/prefix";

const AppJobsLazy = React.lazy(() => import("./components/AppJobs"));
const AppNetworkLazy = React.lazy(() => import("./components/AppNetwork"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${appJobsPrefix}`} />,
      },
      {
        path: `/${appJobsPrefix}/*`,
        element: (
          <Suspense fallback={<div>...Loading AppJobs</div>}>
            <AppJobsLazy />
          </Suspense>
        ),
      },
      {
        path: `/${appNetworkPrefix}/*`,
        element: (
          <Suspense fallback={<div>...Loading AppNetwork</div>}>
            <AppNetworkLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
