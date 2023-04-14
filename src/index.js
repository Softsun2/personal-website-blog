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
import Cmaebrea from "./components/cmaebrea/Cmaebrea";
import Zine from "./components/portfolio/Zine";
import { portfolioPages } from "./components/portfolio/Zine";

/* paths that should be rendered in the nav */
const navPaths = ["/portfolio", "/cmaebrea"];
/* this is dumb haha */
const router = createBrowserRouter([
  {
    path: "/",
    element: composeComponents(<Navigate to="/portfolio" />),
    errorElement: null,
  },
  {
    path: "/portfolio",
    element: composeComponents(
      <Header navPaths={navPaths} />,
      <Zine pages={portfolioPages} />
      // footer or somthing later
    ),
    errorElement: null,
  },
  {
    path: "/cmaebrea",
    element: composeComponents(
      <Header navPaths={navPaths} />,
      <Cmaebrea />
      // footer or somthing later
    ),
    errorElement: null,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
