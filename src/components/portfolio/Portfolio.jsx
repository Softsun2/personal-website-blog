import s from "./Portfolio.module.css";

function PortfolioSection(props) {
  const title = props.title;
  const subsections = props.subsections;
  return (
    <div id={s[title]} className={s.portfolioSection}>
      {title && <h2>{title}</h2>}
      {subsections}
    </div>
  );
}

function PortfolioSubsection(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div id={s[title]} className={s.portfolioSection}>
      {title && <h3>{title}</h3>}
      {content}
    </div>
  );
}

const tldr = (
  <PortfolioSection
    title="tldr"
    subsections={
      <PortfolioSubsection
        content={
          <p>
            The condensed version of this shpeal is just my{" "}
            <a href="../../media/master-Peyton-Okubo.pdf">resume</a>.
          </p>
        }
      />
    }
  />
);
const intro = (
  <PortfolioSection
    title="intro"
    subsections={
      <PortfolioSubsection
        content={
          <p className={s.columns}>
            My name is Peyton Okubo. This is where I'm informally displaying
            mycomputerEndeavors human experience. Experience that is relevant to
            the community and industry I’m eager to be a part of as a recent
            computer science graduate.
          </p>
        }
      />
    }
  />
);
const education = (
  <PortfolioSection
    title="Education"
    subsections={
      <PortfolioSubsection
        title="Univesity"
        content={
          <p className={s.columns}>
            My name is Peyton Okubo. This is where I'm informally displaying
            mycomputerEndeavors human experience. Experience that is relevant to
            the community and industry I’m eager to be a part of as a recent
            computer science graduate.
          </p>
        }
      />
    }
  />
);
const experience = null;
const projects = null;
const contacts = (
  <PortfolioSection
    title="contacts"
    subsections={
      <PortfolioSubsection
        content={
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
              <a
                href="mailto:okubo012@umn.edu"
                target="_blank"
                rel="noreferrer"
              >
                okubo012@umn.edu
              </a>
            </span>
          </p>
        }
      />
    }
  />
);

export default function Portfolio() {
  return (
    <div className={s.portfolio}>
      <h1 className={s.title}>Portfolio</h1>
      {tldr}
      {intro}
      {education}

      {/* contacts shouldn't be a PortfolioSection component */}
      {contacts}
    </div>
  );
}
