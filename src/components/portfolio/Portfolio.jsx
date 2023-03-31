import s from "./Portfolio.module.css";
import headShot from "../../image/behind-cleary.jpg";

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
        <div className={s.contactInfo}> Contact Info</div>
        <p>About Me</p>
      </header>
      <div>Portfolio Element</div>
    </div>
  );
}
