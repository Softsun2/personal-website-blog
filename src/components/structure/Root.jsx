import { Link, Outlet } from "react-router-dom";
import styles from '../styles/root.module.css';

export default function Root(props) {
  const paths = props.paths;
  return (
    <div>
      <header>
        <h1 className={styles.name}>
          <Link to="/">CMAEBREA</Link>
        </h1>
        <nav className={styles.rootNav}>
          {paths.map((path) => (
            <Link to={path} className={styles.rootNavLink}>
              {path.at(0)+path.slice(1)}
            </Link>
          ))}
        </nav> 
      </header>
      <Outlet />
    </div>
  );
}

