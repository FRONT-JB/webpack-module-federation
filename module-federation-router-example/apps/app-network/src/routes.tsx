import React, { useEffect } from "react";
import {
  Navigate,
  Outlet,
  matchRoutes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const RoutingManager: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;

      if (
        location.pathname === pathname ||
        !matchRoutes(routes, { pathname })
      ) {
        return;
      }

      navigate(pathname);
    };

    /**
     * app-shell에서 커스텀 이벤트를 발생시킴.
     * app-shell에서 라우터를 변경시켰을때 이 app-network에서 처리하기 위해 사용
     */
    window.addEventListener("[app-shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener(
        "[app-shell] navigated",
        shellNavigationHandler
      );
    };
  }, [location]);

  useEffect(() => {
    /** app-network 라우터가 변경됐을때 다른 서비스에 전달시키기 위해 사용 */
    window.dispatchEvent(
      new CustomEvent("[app-network] navigated", {
        detail: location.pathname,
      })
    );
  }, [location]);

  return <Outlet />;
};

export const routes = [
  {
    path: "/",
    element: <RoutingManager />,
    children: [
      {
        index: true,
        element: <Navigate to="/a" />,
      },
      {
        path: "a",
        element: <div>App Network Page A</div>,
      },
      {
        path: "b",
        element: <div>App Network Page B</div>,
      },
    ],
  },
];
