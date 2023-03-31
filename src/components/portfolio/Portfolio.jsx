import s from "./Portfolio.module.css";

/*
Portfolio Element:
  Category (education/experience/projects etc..)
  Title
  Timeline
  Logo
  Content
    description
    media (screenshots/evidence/photos/links etc)
  Technologies
*/

/*
Portfolio Page:
  Name
  Headshot
  Contact Info
  About Me
  Art/Image
  Content
*/
export default function Portfolio() {
  return (
    <div>
      <header className={s.portfolioHeader}>
        {/* <img className={s.headShot} src={headShot} alt="behind-cleary" /> */}
        <div className={s.contactInfo}>
          <span>6128609250</span>
          <span>
            <a
              href="https://github.com/Softsun2"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </span>
          <span>
            <a href="mailto:okubo012@umn.edu" target="_blank" rel="noreferrer">
              okubo012@umn.edu
            </a>
          </span>
        </div>
        <p>
          The condensed version of this shpeal is just my <a>resume</a>.
        </p>
        <p>
          My name is Peyton Okubo. This is where I'm informally displaying my
          human experience. Experience that is relevant to the community and
          industry I’m eager to be a part of as a recent computer science
          graduate.
        </p>
      </header>
      <div>Portfolio Element</div>
    </div>
  );
}
