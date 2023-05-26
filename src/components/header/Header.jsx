import { NavLink, Link } from "react-router-dom";
import s from "./Header.module.css";
import name from "../../image/NAME.png";
import { classNames } from "../../util/util";

export default function Header(props) {
  const { navPaths } = props;
  return (
    <div className={s.header}>
      <header>
        <h1 className={s.name}>
          <Link to="/">
            <img className={s.nameImg} src={name} alt="PEYTON OKUBO" />
          </Link>
        </h1>
        <nav className={s.rootNav}>
          {navPaths.map((path) => (
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
