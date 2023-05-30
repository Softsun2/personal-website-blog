import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { composeComponents } from "./util/util";

import "./index.css";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Cmaebrea from "./components/cmaebrea/Cmaebrea";
import Portfolio from "./components/portfolio/Portfolio";

/* paths that should be rendered in the nav */
const navPaths = ["/portfolio", "/cmaebrea"];
/* this is dumb haha */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio/0" />,
    errorElement: null,
  },
  {
    path: "/portfolio",
    element: <Navigate to="/portfolio/0" />,
    errorElement: null,
  },
  {
    path: "/portfolio/:pageIndex",
    element: composeComponents(
      <Welcome />,
      <Header navPaths={navPaths} />,
      <Portfolio />
    ),
    errorElement: null,
  },
  {
    path: "/cmaebrea/:page",
    element: composeComponents(<Header navPaths={navPaths} />, <Cmaebrea />),
    errorElement: null,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
