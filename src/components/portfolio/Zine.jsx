import { useState, createElement } from "react";
import s from "./Zine.module.css";
import Modal from "../modal/Modal";

// local images
import marion from "../../image/20.jpg";
import me from "../../image/me.JPG";
import terminalBrr from "../../image/terminal-brr-gif.gif";
import campusDay from "../../image/campus-day.JPEG";
import firstAssignment from "../../image/first-coding-assignment.JPEG";
import researchAssistant from "../../image/research-graph.png";

const TldrPage = ({ setPage }) => {
  return (
    <div id={s.tldrPage}>
      <div id={s.header}>
        <h2>Peyton Okubo</h2>
        <div>
          <p>
            The condensed version of this shpeal is just my{" "}
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
      <div id={s.meImages}>
        <img id={s.me} src={me} alt="me" />
        <img id={s.terminalBrr} src={terminalBrr} alt="terminalBrr" />
      </div>
      <p>
        My name is Peyton Okubo. I’m a person! This is where I'm informally
        displaying my human experience. Experience relevant to the community and
        industry I’m eager to be a part of as a recent computer science
        graduate.
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
          major and no prior programming experience. Though, I had grown up
          using computers, a part of me lives within every machine I’ve ever
          used. This prompted me to enroll in an introductory computer science
          course. Immediately I was absorbed by the design, implementation, and
          analytical principles associated with programming concepts. It clicked
          with me, it was exciting; it still is. The satisfaction of completing
          my first real coding binge was surreal.
        </p>
        <p>
          Course content engulfed me as I fought to catch up to my more
          experienced classmates. I took care in my studies and sought the
          highest quality solutions I was capable of on assignments. Low-level
          system architecture, functional programming concepts, software design
          paradigms, and web development especially captivated me. These topics
          inspired further independent learning, personal projects, and academic
          involvement as a teacher’s assistant. Naturally, it became evident
          that a career in software was for me.
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
            storing data on synthesized DNA. My team specifically was tasked
            with publishing an in-house DNA synthesis simulation. My role was to
            develop a benchmarking program to gather hardware metrics to analyze
            the simulation's performance (more importantly the multi-agent
            routing algorithm’s performance). Using Python, Pandas, Gephi, a
            handful of command-line tools, and multiprocessing I was able to
            record over 150,000 data points. I presented this data to our team
            lead and employees of the funding company and was then tasked with
            authoring and revising the results section of the{" "}
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
            students on class discussion boards. It was easy to do so online,
            where I could take time to type out thoughtful responses from behind
            the cover of a screen. Especially coming from a position where I
            once needed more help than other students when I began my computer
            science studies. I understood what it was like to not pick up things
            immediately and it sucks. I wanted to help those with who I was once
            in the same position. At the same time, I was horridly anxious about
            taking on a leadership role. I wanted to help other students and I
            wanted to overcome social fears of mine.
          </p>
          <p>
            I TA’d an advanced programming principles class taught through the
            lens of functional programming (in OCaml). I was intimidated at
            first but my experience and desire to support my students made it
            much less uncomfortable. Eventually, supervising labs of up to 30
            students and seeing my office hours queue fill up felt natural.
            Besides interacting with the students I developed a grading script
            that automatically graded and student’s in class exercises and
            emailed them their results using Python, PyGithub, Pandas, and
            Google Apps Script.
          </p>
        </div>
      </div>
      <aside>
        <p>
          Having yet to apply my skills outside of academia I'm eager to xyz in
          jobs xyz...
        </p>
      </aside>
    </div>
  );
};

const ProjectsPage = () => {
  const [modalIsOpen, setModalState] = useState(false);
  return (
    <div id={s.projectsPage}>
      <h2>Projects</h2>
      <div id={s.projects}>
        <div className={s.project}>
          <div className={s.projectHeader}>
            <h3 onClick={() => setModalState(true)}>Title 1</h3>
            {modalIsOpen && (
              <Modal setModalState={setModalState}>
                <iframe
                  id={s.fibBSPViTodoDemo}
                  title="fibBSPViTodo"
                  src="https://streamable.com/e/h57yd?autoplay=1"
                  frameborder="0"
                  allowfullscreen
                  allow="autoplay"
                ></iframe>
              </Modal>
            )}
          </div>
          <p>description</p>
        </div>
        <div className={s.project}>
          <div className={s.projectHeader}>
            <h3>Title</h3>
            <iframe
              title="video"
              src="https://streamable.com/e/0ek7hc?autoplay=1&nocontrols=1"
              frameborder="0"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </div>
          <p>description</p>
        </div>
        <div className={s.project}>
          <div className={s.projectHeader}>
            <h3>Title</h3>
            <iframe
              title="video"
              src="https://streamable.com/e/h57yd?autoplay=1"
              frameborder="0"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </div>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

const ForFunPage = () => {
  return <div>forFunPage </div>;
};

export const portfolioPages = [
  TldrPage,
  IntroPage,
  EducationPage,
  ExperiencePage,
  ProjectsPage,
  ForFunPage,
];

export default function Zine(props) {
  const { pages } = props;
  const [page, setPage] = useState(0);
  return (
    <div id={s.zine}>
      {createElement(pages[page], { setPage: setPage })}
      <footer id={s.pageNumber}>
        <p>{page}</p>
      </footer>
      <footer id={s.pageNav}>
        <nav>
          {page !== 0 && (
            <button id={s.backwardButton} onClick={() => setPage(page - 1)}>
              {"<-"}
            </button>
          )}
          {page !== pages.length - 1 && (
            <button id={s.forwardButton} onClick={() => setPage(page + 1)}>
              {"->"}
            </button>
          )}
        </nav>
      </footer>
    </div>
  );
}
