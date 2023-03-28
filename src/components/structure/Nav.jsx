import { Link, Outlet } from "react-router-dom";

import Portfolio from "./Portfolio";
import Blog from "./Blog";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to={`portfolio`}>Portfolio</Link>
        <Link to={`blog`}>Blog</Link>
      </nav> 
      <Outlet />
    </div>
  );
}

