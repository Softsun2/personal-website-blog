import { NavLink, Link, Outlet } from "react-router-dom";
import s from "./Root.module.css";
import classNames from "../../util/formatter";

export default function Root(props) {
  const paths = props.paths;
  return (
    <div className={s.headerContainer}>
      <header>
        <h1 className={s.name}>
          <Link to="/" className={s.link}>
            CMAEBREA
          </Link>
        </h1>
        <nav className={s.rootNav}>
          {paths.map((path) => (
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive
                  ? classNames(s.rootNavLink, s.activeNavLink)
                  : s.rootNavLink;
              }}
            >
              {path}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
