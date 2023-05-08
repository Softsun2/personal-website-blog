import { useState, useEffect, createElement } from "react";
import s from "./Pages.module.css";
import Modal from "../modal/Modal";

// local images
import marion from "../../image/20.jpg";

import me from "../../image/me.JPG";
import terminalBrr from "../../image/terminal-brr-gif.gif";

import campusDay from "../../image/campus-day.JPEG";
import firstAssignment from "../../image/first-coding-assignment.JPEG";

import researchAssistant from "../../image/research-graph.png";

import turiCar from "../../image/turi-car.jpg";
import turiGroup from "../../image/turi-group.JPG";
import turiGif from "../../image/turi-gif.gif";
import { getLastCommit } from "../../util/util";

const TldrPage = ({ setPage }) => {
  return (
    <div id={s.tldrPage}>
      <div id={s.header}>
        <h2>Peyton Okubo</h2>
        <div>
          <p>
            The condensed version of this shpeal is my{" "}
            <a href="../../media/master-Peyton-Okubo.pdf">resume</a>.
          </p>
          <ul>
            <li>
              <span onClick={() => setPage(0)} className={s.pageNavLink}>
                Tldr
              </span>
              <span>0</span>
            </li>
            <li>
              <span onClick={() => setPage(1)} className={s.pageNavLink}>
                Intro
              </span>
              <span>1</span>
            </li>
            <li>
              <span onClick={() => setPage(2)} className={s.pageNavLink}>
                Education
              </span>
              <span>2</span>
            </li>
            <li>
              <span onClick={() => setPage(3)} className={s.pageNavLink}>
                Experience
              </span>
              <span>3</span>
            </li>
            <li>
              <span onClick={() => setPage(4)} className={s.pageNavLink}>
                Projects
              </span>
              <span>4</span>
            </li>
            <li>
              <span onClick={() => setPage(5)} className={s.pageNavLink}>
                For fun
              </span>
              <span>5</span>
            </li>
          </ul>
        </div>
      </div>
      <figure>
        <img src={marion} alt="cleary" />
        <figcaption>
          <i>Lake Marion, 2020</i>
        </figcaption>
      </figure>
    </div>
  );
};

const IntroPage = () => {
  return (
    <div id={s.introPage}>
      <h2>Intro</h2>
      <div id={s.meImages}>
        <img id={s.me} src={me} alt="me" />
        <img id={s.terminalBrr} src={terminalBrr} alt="terminalBrr" />
      </div>
      <p>
        My name is Peyton Okubo. This is where I'm informally displaying my
        human experience. Experience relevant to the community and industry I’m
        eager to be a part of.
      </p>
    </div>
  );
};

const EducationPage = () => {
  return (
    <div id={s.educationPage}>
      <div id={s.campusImages}>
        <figure>
          <img src={campusDay} alt="campusDay" />
        </figure>
        <figure>
          <img src={firstAssignment} alt="firstAssignment" />
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
          Naturally, I was drawn to enroll in an introductory computer science
          course. I quickly became absorbed by design, implementation, and
          analytical concepts. It clicked with me, it was exciting; it still is.
          The satisfaction of completing my first real coding binge was surreal.
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
    <div id={s.experiencePage}>
      <h2>Experience</h2>
      <div id={s.experiences}>
        <div className={s.experience}>
          <div className={s.experienceTitle}>
            <h3>Reasearch Assistant</h3>
            <h4>06/22 - 03/23</h4>
          </div>
          <figure>
            <img src={researchAssistant} alt="researchAssistant"></img>
            <figcaption>
              Total Droplets vs. Max Congestion. This data was obtained by
              running the simulation at a constant grid size of 45 × 45 over a
              range of gene lengths two to twelve. The relationship between the
              number of pulled droplets and the maximum congestion is
              approximately linear.
            </figcaption>
          </figure>
          <p>
            Last June I joined a research project associated with the concept of
            storing data on synthesized DNA. My team was specifically tasked
            with publishing an in-house DNA synthesis simulation. My role was to
            develop a{" "}
            <a
              href="https://github.com/Softsun2/DMFsim-benchmarking.git"
              target="_blank"
              rel="noreferrer"
            >
              benchmarking program
            </a>{" "}
            to gather hardware metrics to analyze the simulation's performance.
            Using Python, Pandas, Gephi, and multiprocessing I was able to
            record over 150,000 data points. I presented this data to our team
            lead and employees of the funding company. I also helped author and
            revise the analytical section of the research paper.
            <a
              href="https://arxiv.org/abs/2211.15494v3"
              target="_blank"
              rel="noreferrer"
            >
              research paper
            </a>
            .
          </p>
        </div>
        <div className={s.experience}>
          <div className={s.experienceTitle}>
            <h3>Teacher's Assistant</h3>
            <h4>08/21 - 12/21</h4>
          </div>
          <p>
            Upon completing projects and assignments I enjoyed helping other
            students on class discussion boards. Especially coming from a
            position where I once needed more help than other students. I wanted
            to help those in a position I was once familiar with. At the same
            time, I was horridly anxious to take on a leadership role.
          </p>
          <p>
            I TA’d an advanced programming principles class taught through the
            lens of functional programming (in OCaml). This role was far beyond
            my range of comfort but with patience and faith in my knowledge
            eventually supervising labs holding office hours felt natural.
          </p>
          <p>
            Besides directly interacting with students I developed a grading
            script that automatically graded students in class exercises and
            emailed them their results using Python, PyGithub, Pandas, and
            Google Apps Script.
          </p>
        </div>
      </div>
    </div>
  );
};

const FibBSPViTodo = () => {
  return (
    <div id={s.fibBSPViTodoPage}>
      <h2>Projects</h2>
      <div className={s.fibBSPViTodoContent}>
        <h3>fibBSPViTodo</h3>
        {/* TODO: Gif */}
        <img src={marion} alt="marion"></img>
        <p>
          VI-TODO is a take on the typical to-do web app. VI-TODO uses binary
          space partitioning in a Fibonacci layout to display tasks, similar to
          layouts of common Unix window managers such as DWM (my favorite!),
          BSPWM, and I3. The user can interact with the to-do tasks via basic Vi
          keymaps and motions. Special commands are implemented to filter tasks
          based on completion status. I was motivated to build this project to
          better understand DOM manipulation and more complex layout strategies
          using PUG, Javascript, ExpressJS, MYSQL, and CSS.
        </p>
      </div>
    </div>
  );
};

const Turi = () => {
  return (
    <div id={s.turiPage}>
      <h2>Projects</h2>
      <h3>Turi</h3>
      <div id={s.turiCol}>
        <figure>
          <img id={s.turiGroup} src={turiGroup} alt="turiGroup" />
          <figcaption>Competition Day (I'm in orange), 2022</figcaption>
        </figure>
        <div id={s.turiRow}>
          <p>
            Last May I had the opportunity to take a mechatronics class abroad
            in Switzerland at the Zurich University of Applied Sciences. Teams
            were tasked with constructing a line following robot. This was my
            first time working with a cross-disciplinary team with mechanical
            engineers, computer engineers, and computer scientists. The aspect
            of designing software with hardware in mind was an engaging
            challenge. It was pleasant to develop code that took on a different
            structure than those of typical computer science courses.
            Implementing custom sensor drivers, a proportional control system
            and obstacle avoidance was rewarding. I was proud that our robot
            came in second place!
          </p>
          <div className={s.carImages}>
            <figure>
              <img id={s.turiGif} src={turiGif} alt="turiGif" />
              <figcaption>Early Iteration Software Demo</figcaption>
            </figure>
            <figure>
              <img id={s.turiCar} src={turiCar} alt="turiCar" />
              <figcaption>Final Robot Assembly</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
const This = () => {
  const [lastCommit, setLastCommit] = useState(null);
  useEffect(() => {
    getLastCommit("softsun2", "personal-website-blog").then((res) =>
      setLastCommit(res)
    );
  });
  return (
    <div id={s.thisPage}>
      <h2>Projects</h2>
      <h3>
        <a
          href="https://github.com/Softsun2/personal-website-blog.git"
          target="_blank"
          rel="noreferrer"
        >
          This Website
        </a>
      </h3>
      <p>
        With a growing interest in web development, I wanted to learn the widely
        used front-end framework React. The goal of this website was to both
        display my experience as well as structuring a project around React.
        I’ve enjoyed learning about the seamlessness of single-page
        applications, the composability of components, and responsive design.
      </p>
      <p>Last commit: {lastCommit}</p>
    </div>
  );
};

const ForFunPage = () => {
  return (
    <div id={s.forFunPage}>
      <h2>For Fun</h2>
      <div className={s.columns}>
        <div className={s.media}>
          <figure>
            <img src={marion} alt="marion" />
            <figcaption>marion</figcaption>
          </figure>
          <figure>
            <img src={marion} alt="marion" />
            <figcaption>marion</figcaption>
          </figure>
          <figure>
            <img src={marion} alt="marion" />
            <figcaption>marion</figcaption>
          </figure>
        </div>
        <article>
          <p>
            I was drawn into the world of configuration and personalized
            development environments by the text editor Vim. Building a
            customized text editor with the minimum features to suit my needs
            appealed to me. I like to know how my software works; I like to be
            in control of how my software works. I like when my software does
            exactly what it should and no more. There are considerable drawbacks
            to minimizing/personalizing your development tools; using these
            tools is a hobby of mine and I only do so when I can get away with
            it. Working with lower-level applications has taught me much about
            operating systems and command-line workflow. This led me down a
            rabbit hole of configurability and reproducibility philosophies.
          </p>
          <h3>Themeing</h3>
          <p>
            I value uniformity and flexibility when it comes to design. I’ve
            been casually theming my desktop environments for about a year now
            and Flavours is the tool I use to do so. Flavours is a tool that
            manages base16 color schemes across common Unix applications. Where
            users can apply color scheme changes in real-time to their
            configured apps via the command line.
          </p>
          <p>
            Flavours was great but its implementation contradicted declarative
            configuration philosophies that are conventional to most Unix
            applications. Namely, configuring the program's set of color schemes
            and templates had to be done imperatively and manually.
          </p>
          <p>
            I took this opportunity to learn the basics of a new language (Rust)
            and made my first open-source contribution. I added new fields to
            the configuration file to declare the color scheme and template
            sources and provided appropriate parsing, retrieving, and installing
            of these sources. This made it so users could declare the sources of
            their desired color schemes and templates in their configuration
            file for Flavours and the sources would be installed automatically.
          </p>
          <p>
            I use Flavours in tandem with an image filtering library (Image Go
            Nord) to theme my desktop applications and wallpaper on the fly.
          </p>
          <h3>Vim</h3>
          <p>
            Currently, I’m building a Neovim configuration in Lua. Which has
            taught me about language server protocols, language parsing, and
            modular configuration principles.
          </p>
          <h3>Nix</h3>
          <p>
            I manage my systems configurations and packages with the Nix
            ecosystem. Confusingly Nix is a package manager, language, and
            operating system. Nix packages and Nix configurations are declared
            in the pure functional language Nix. In short, this means one can
            manage an entire system declaratively and reproducibly. Nix has its
            quirks but it allows me to flexibly manage my systems and
            development environments, it also does a wonderful job of preventing
            dependency conflicts.
          </p>
        </article>
      </div>
    </div>
  );
};

export const portfolioPageContents = [
  TldrPage,
  IntroPage,
  EducationPage,
  ExperiencePage,
  FibBSPViTodo,
  Turi,
  This,
  ForFunPage,
];
