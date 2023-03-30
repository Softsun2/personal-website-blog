import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./root/Root";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Gallery from "./gallery/Gallery";
/* declare path component pairs */
const pathComponentMap = {
  portfolio: <Portfolio />,
  blog: <Blog />,
  gallery: <Gallery />,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root paths={Object.keys(pathComponentMap)} />,
    loader: null,
    action: null,
    errorElement: null,
    children: Object.keys(pathComponentMap).map((path) => {
      return {
        path: path,
        element: pathComponentMap[path],
      };
    }),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
