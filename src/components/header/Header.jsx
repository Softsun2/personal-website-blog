import { Link } from "react-router-dom";
import s from "./Header.module.css";
import name from "../../image/NAME.png";

export default function Header(props) {
  return (
    <div className={s.header}>
      <header>
        <h1 className={s.name}>
          <Link to="/">
            <img className={s.nameImg} src={name} alt="PEYTON OKUBO" />
          </Link>
        </h1>
      </header>
    </div>
  );
}
