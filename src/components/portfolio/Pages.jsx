import { useState, useEffect } from "react";
import s from "./Pages.module.css";
import ImageModal from "../imageModal/ImageModal";
import { classNames } from "../../util/util";

// local images
import marion from "../../image/behind-cleary.jpg";
import star from "../../image/star.png";
import radarHouse from "../../image/radar-house.png";
import me from "../../image/me.JPG";
import terminalBrr from "../../image/terminal-brr-gif.gif";
import campusDay from "../../image/campus-day.JPEG";
import flavoursDemo from "../../image/flavours-demo.gif";
import declareTemplate from "../../image/declare-template-demo.gif";
import firstAssignment from "../../image/first-coding-assignment.JPEG";
import researchAssistant from "../../image/research-graph.png";
import fibBSPViTodoDemo from "../../image/fibBSPViTodo-demo.gif";
import turiCar from "../../image/turi-car.jpg";
import turiGroup from "../../image/turi-group.JPG";
import turiGif from "../../image/turi-gif.gif";
import githubLogo from "../../image/github-logo.png";
import { getLastCommit } from "../../util/util";

const FrontCover = () => {
  return (
    <div id={s.frontCover}>
      <h2>Peyton Okubo</h2>
      <figure>
        <ImageModal id={s.marion} src={marion} alt="marion" />
        <figcaption>Lake Marion, 2020</figcaption>
      </figure>
    </div>
  );
};
const InsideFrontCover = () => {
  return (
    <div id={s.insideFrontCover}>
      <ImageModal id={s.star} src={star} alt="-t_*_i^" />
      <p id={s.tldr}>
        My name is Peyton Okubo. This is where I'm informally displaying my
        human experience. Experience relevant to the community and industry I’m
        eager to be a part of.
      </p>
      <p>
        This "zine" condenses to my{" "}
        <a
          href="master-Peyton-Okubo.pdf"
          target="_blank"
          download="Peyton-Okubo-Resume"
        >
          resume
        </a>
        .
      </p>
      <p className={s.date}>03/21/23</p>
    </div>
  );
};
const TableOfContents = ({ navigatePage }) => {
  const pageOffset = 3; // table of contents page offset from zero
  const pages = [
    "Education",
    "Experience",
    "FibBSPViTodo",
    "Turi",
    "This",
    "Flavours",
    "Contact",
  ];

  return (
    <div id={s.tableOfContents}>
      <h2>Contents</h2>
      <ul>
        {pages.map((pageName, i) => {
          return (
            <li className={i === pages.length - 1 ? s.backCover : null}>
              <span
                onClick={() => navigatePage(i + pageOffset)}
                className={s.pageNavLink}
              >
                {pageName}
              </span>
              <span>{i + pageOffset}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const EducationPage = () => {
  return (
    <div id={s.education}>
      <div id={s.campusImages}>
        <figure>
          <ImageModal id={s.campusDay} src={campusDay} alt="campusDay" />
        </figure>
        <figure>
          <ImageModal
            id={s.firstAssignment}
            src={firstAssignment}
            alt="firstAssignment"
          />
          <figcaption>First Coding Assignment, 2020</figcaption>
        </figure>
      </div>
      <article id={s.edcationDescription}>
        <h2>Education</h2>
        <p>
          I completed my computer science degree at the University of Minnesota
          Twin Cities in December 2022. I entered university with an undeclared
          major and no prior programming experience. Though, I grew up using
          computers, a part of me lives within every machine I’ve operated.
          Naturally, I enrolled in an introductory computer science course. I
          quickly became absorbed by design, implementation, and analytical
          concepts. It clicked with me, it was exciting; it still is. The
          satisfaction of completing my first real coding binge was surreal.
        </p>
        <p>
          I took care in my studies and sought the highest quality solutions I
          was capable of. I was especially fond of low-level system
          architecture, functional programming concepts, software design
          paradigms, and web development. These topics inspired further
          independent learning, personal projects, and academic involvement.
        </p>
        <p>
          If not for my passion for computer science I would not have unfolded
          as a person. I owe much of the development of my character to my
          pursuits in academia. It’s important to me, to my personal
          development, to follow a career in software.
        </p>
      </article>
    </div>
  );
};
const ExperiencePage = () => {
  return (
    <div id={s.experience}>
      <h2>Experience</h2>
      <div id={s.experiences}>
        <div className={s.experience}>
          <figure>
            <ImageModal
              id={s.researchAssistant}
              src={researchAssistant}
              alt="researchAssistant"
            />
            <figcaption>
              Total Droplets vs. Max Congestion. This data was obtained by
              running the simulation at a constant grid size of 45 × 45 over a
              range of gene lengths two to twelve. The relationship between the
              number of pulled droplets and the maximum congestion is
              approximately linear.
            </figcaption>
          </figure>
          <h3>Research Assistant</h3>
          <article>
            <p>
              Last June I joined a research project associated with the concept
              of storing data on synthesized DNA. My team was specifically
              tasked with publishing an in-house DNA synthesis simulation. My
              role was to develop a{" "}
              <a
                href="https://github.com/Softsun2/DMFsim-benchmarking.git"
                target="_blank"
                rel="noreferrer"
              >
                benchmarking program
              </a>{" "}
              to gather hardware metrics to analyze the simulation's
              performance. Using Python, Pandas, Gephi, and multiprocessing I
              was able to record over 150,000 data points. I presented this data
              to our team lead and employees of the funding company. I also
              helped author and revise the analytical section of the{" "}
              <a
                href="https://arxiv.org/abs/2211.15494v3"
                target="_blank"
                rel="noreferrer"
              >
                research paper
              </a>
              .
            </p>
          </article>
        </div>
        <div className={s.experience}>
          <h3>Teacher's Assistant</h3>
          <article>
            <p>
              Upon completing projects and assignments I enjoyed helping other
              students on class discussion boards. Especially coming from a
              position where I once needed more help than other students. I
              wanted to help those in a position I was familiar with. At the
              same time, I was horridly anxious to take on a leadership role.
            </p>
            <p>
              I TA’d an advanced programming principles class taught through the
              lens of functional programming (in OCaml). This role was outside
              range of comfort but with patience and faith in my experience
              eventually supervising labs holding office hours felt natural.
            </p>
            <p>
              Besides directly interacting with students I developed a grading
              script that automatically graded students in class exercises and
              emailed them their results using Python, PyGithub, Pandas, and
              Google Apps Script.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
const FibBSPViTodoPage = () => {
  return (
    <div id={s.fibBSPViTodo}>
      <h2>
        <a
          href="https://github.com/Softsun2/fibBSPViTodo.git"
          target="_blank"
          rel="noreferrer"
        >
          FibBSPViTodo
        </a>
      </h2>
      <div className={s.fibBSPViTodoContent}>
        <ImageModal
          id={s.fibBSPViTodoDemo}
          src={fibBSPViTodoDemo}
          alt="fibBSPViTodoDemo"
        />
        <p>
          FibBSPViTodo is a minimalist take on the typical to-do web app.
          FibBSPViTodo uses binary space partitioning in a Fibonacci layout to
          display tasks, similar to layouts of common Unix window managers such
          as DWM (my favorite!), Yabai, and I3. The user can interact with the
          to-do tasks via basic Vi keymaps and motions. Special commands are
          implemented to filter tasks based on completion status. I was
          motivated to build this project to better understand DOM manipulation
          and more complex layout strategies using PUG, Javascript, ExpressJS,
          MYSQL, and CSS.
        </p>
      </div>
    </div>
  );
};
const TuriPage = () => {
  return (
    <div id={s.turi}>
      <h2>Turi</h2>
      <div className={s.grid}>
        <figure id={s.turiGroupFig}>
          <ImageModal id={s.turiGroupImg} src={turiGroup} alt="turiGroup" />
          <figcaption>Competition Day (I'm in orange), 2022</figcaption>
        </figure>
        <div id={s.carImages}>
          <figure>
            <ImageModal id={s.turiGif} src={turiGif} alt="turiGif" />
            <figcaption>Early Iteration Software Demo</figcaption>
          </figure>
          <figure>
            <ImageModal id={s.turiCar} src={turiCar} alt="turiCar" />
            <figcaption>Final Robot Assembly</figcaption>
          </figure>
        </div>
        <p id={s.turiDescription}>
          Last May I had the opportunity to take a mechatronics class abroad in
          Switzerland at the Zurich University of Applied Sciences. Teams were
          tasked with constructing a line following robot. This was my first
          time working with a team consisting of mechanical engineers, computer
          engineers, and computer scientists. Our team name was Turi, which is
          slang for tourist (especially American) in Swiss German. The aspect of
          designing software with hardware in mind was an engaging challenge. It
          was pleasant to develop code that took on a different structure than
          typical computer science projects. Implementing custom sensor drivers,
          a proportional control system and obstacle avoidance was rewarding. I
          was proud that our robot came in second place!
        </p>
      </div>
    </div>
  );
};
const ThisPage = () => {
  const [lastCommit, setLastCommit] = useState(null);
  useEffect(() => {
    getLastCommit("softsun2", "personal-website-blog").then((res) =>
      setLastCommit(res)
    );
  });
  return (
    <div id={s.this}>
      <h2>
        <a
          href="https://github.com/Softsun2/personal-website-blog.git"
          target="_blank"
          rel="noreferrer"
        >
          This Website
        </a>
      </h2>
      <p>
        With a growing interest in web development, I wanted to learn the
        front-end library React as well as practice up on my CSS skills. The
        goal of this website is to display my experience while becoming a more
        versatile web developer. I’ve enjoyed learning about seamless
        single-page applications, the composability of components, and
        responsive design.
      </p>
      <p>Last commit: {lastCommit}</p>
    </div>
  );
};
const ContributionPage = () => {
  return (
    <div id={s.contribution}>
      <h2>Flavours (Contributor)</h2>
      <figure id={s.declareDemo}>
        <ImageModal
          id={s.declareTemplate}
          src={declareTemplate}
          alt="declareTemplate"
        />
        <figcaption>Declaring and using a custom template source</figcaption>
      </figure>
      <article>
        <p>
          I value uniformity and flexibility when it comes to design. I’ve been
          casually theming my desktop environments for about a year now and{" "}
          <a
            href="https://github.com/Misterio77/flavours.git"
            target="_blank"
            rel="noreferrer"
          >
            Flavours
          </a>{" "}
          is the tool I use to do so. Flavours is a tool that manages base16
          color schemes across common Unix applications. Where users can apply
          color scheme changes in real-time to their configured apps via the
          command line.
        </p>
        <p>
          Flavours was great but its implementation contradicted declarative
          configuration philosophies that are conventional to many Unix
          applications. Namely, configuring the program's set of color schemes
          and templates had to be done imperatively and manually.
        </p>
        <p>
          I took this opportunity to learn the basics of Rust and made{" "}
          <a
            href="https://github.com/Misterio77/flavours/pull/62"
            target="_blank"
            rel="noreferrer"
          >
            my first open-source contribution
          </a>
          . I added new fields to the configuration file to declare the color
          scheme and template sources and provided appropriate parsing,
          retrieving, and installing of these sources. This made it so users
          could declare the sources of their desired color schemes and templates
          in their configuration file for Flavours and the sources would be
          installed automatically.
        </p>
        <p>
          I use Flavours in tandem with an{" "}
          <a
            href="https://ign.schrodinger-hat.it/"
            target="_blank"
            rel="noreferrer"
          >
            image filtering library
          </a>{" "}
          to theme my desktop applications and wallpaper on the fly.
        </p>
        <figure id={s.desktopDemoFig}>
          <ImageModal
            id={s.desktopDemo}
            src={flavoursDemo}
            alt="flavoursDemo"
          />
          <figcaption>Previewing desktop themes</figcaption>
        </figure>
      </article>
    </div>
  );
};
const Contact = () => {
  return (
    <div id={s.contact}>
      <ImageModal id={s.radarHouse} src={radarHouse} alt="radarHouse" />
      <p id={s.thanks}>
        In a sea of digital commotion thank you for discovering my tiny diy
        home. I'm receiving...
      </p>
      <ul id={s.contactInfo}>
        <li>
          <a
            href="master-Peyton-Okubo.pdf"
            target="_blank"
            download="Peyton-Okubo-Resume"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="mailto:okubo.peyton@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            okubo.peyton@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:5128609250" target="_blank" rel="noreferrer">
            612 860 9250
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Softsun2"
            target="_blank"
            rel="noreferrer"
          >
            <img id={s.githubLogo} src={githubLogo} alt="githubLogo"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const portfolioPageContents = [
  FrontCover,

  InsideFrontCover,
  TableOfContents,

  EducationPage,
  ExperiencePage,

  FibBSPViTodoPage,
  TuriPage,

  ThisPage,
  ContributionPage,

  Contact, // back cover
];
