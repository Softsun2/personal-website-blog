import { NavLink, Link } from "react-router-dom";
import s from "./Header.module.css";
import name from "../../image/NAME.png";
import { classNames } from "../../util/util";

export default function Header(props) {
  const paths = props.navPaths;
  return (
    <div className={s.headerContainer}>
      <header>
        <h1 className={s.name}>
          <Link to="/">
            <img className={s.nameImg} src={name} alt="PEYTON OKUBO" />
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
              {/* strip the leading slash */}
              {path.slice(1)}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  );
}