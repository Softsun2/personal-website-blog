import s from "./Portfolio.module.css";
import { classNames } from "../../util/util";

export default function Portfolio() {
  return (
    <div>
      <p className={s.tldr}>
        The condensed version of this shpeal is just my{" "}
        <a href="../../media/master-Peyton-Okubo.pdf">resume</a>.
      </p>
      <p className={classNames(s.aboutMe, s.columns)}>
        My name is Peyton Okubo. This is where I'm informally displaying my
        human experience. Experience that is relevant to the community and
        industry I’m eager to be a part of as a recent computer science
        graduate.
      </p>
      <p className={s.contactInfo}>
        <span>6128609250</span>
        {" | "}
        <span>
          <a
            href="https://github.com/Softsun2"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </span>
        {" | "}
        <span>
          <a href="mailto:okubo012@umn.edu" target="_blank" rel="noreferrer">
            okubo012@umn.edu
          </a>
        </span>
      </p>
    </div>
  );
}
