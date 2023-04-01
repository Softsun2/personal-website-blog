import s from "./Portfolio.module.css";
import { classNames } from "../../util/util";

function portfolioSection(content, title = null) {
  return (
    <div id={s[title]} className={s.portfolioSection}>
      {title && <h2>{title}</h2>}
      {content}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className={s.portfolio}>
      {portfolioSection(
        <p>
          The condensed version of this shpeal is just my{" "}
          <a href="../../media/master-Peyton-Okubo.pdf">resume</a>.
        </p>,
        "tldr"
      )}
      {portfolioSection(
        <p className={s.columns}>
          My name is Peyton Okubo. This is where I'm informally displaying my
          human experience. Experience that is relevant to the community and
          industry I’m eager to be a part of as a recent computer science
          graduate.
        </p>,
        "p"
      )}
      {portfolioSection(
        <p>
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
        </p>,
        "contact"
      )}
    </div>
  );
}
