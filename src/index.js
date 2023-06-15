import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { composeComponents } from "./util/util";

import s from "./index.module.css";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Cmaebrea from "./components/cmaebrea/Cmaebrea";
import Portfolio from "./components/portfolio/Portfolio";
import NotFound from "./components/notFound/NotFound";
import TestPropResize from "./components/proportionalResize/TestPropResize";

/* paths that should be rendered in the nav */
const navPaths = ["/portfolio", "/cmaebrea"];
/* this is dumb haha */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio/0" />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio",
    element: <Navigate to="/portfolio/0" />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio/:pageIndex",
    element: (
      <div className={s.route}>
        {/*<Welcome />*/}
        <Header navPaths={navPaths} />
        <Portfolio />
      </div>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/cmaebrea",
    element: <Navigate to="/cmaebrea/0" />,
    errorElement: <NotFound />,
  },
  {
    path: "/cmaebrea/:page",
    element: composeComponents(
        {/*<Welcome />*/},
      <Header navPaths={navPaths} />,
      <Cmaebrea />
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/testpropresize",
    element: <TestPropResize />,
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
