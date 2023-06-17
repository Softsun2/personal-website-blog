import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import s from "./index.module.css";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import NotFound from "./components/notFound/NotFound";

/* paths that should be rendered in the nav */
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
        <Header />
        <Portfolio />
      </div>
    ),
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
