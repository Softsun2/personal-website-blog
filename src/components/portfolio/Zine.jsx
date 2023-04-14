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
  function Project(props) {
    const [modalIsOpen, setModalState] = useState(false);
    const { title, description, demoThumbnail, demoSrc } = props;
    return (
      <div className={s.project}>
        <div className={s.projectContent}>
          <img
            onClick={() => setModalState(true)}
            src={demoThumbnail}
            alt={title}
          />
          <div className={s.projectText}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        {modalIsOpen && (
          <Modal setModalState={setModalState}>
            <iframe
              title="fibBSPViTodo"
              src={demoSrc}
              frameborder="0"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </Modal>
        )}
      </div>
    );
  }
  return (
    <div id={s.projectsPage}>
      <h2>Projects</h2>
      <div id={s.projects}>
        <Project
          title="fibBSPViTodo"
          description="VI-TODO is a take on the typical to-do web app. VI-TODO uses binary space partitioning in a Fibonacci layout to display tasks, similar to layouts of common Unix window managers such as DWM, BSPWM, and I3. The user can interact with the to-do tasks via basic Vi keymaps and motions. Special commands are implemented to filter tasks based on completion status. I was motivated to build this project to better understand DOM manipulation and more complex layout strategies using PUG, Javascript, ExpressJS, MYSQL, and CSS."
          demoThumbnail="https://cdn-cf-east.streamable.com/image/pqlryv.jpg?Expires=1681677621335&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=MmtoZkkegd7P3Mm4~b6XJaWV5xOh79cJ~fwJw9cY4YV6k6AjTb97ybHibdqSza8xFtiiZUxozAuw09UmpY3lvto-6fcQEXO9CarIHwNtpKUC34KK1BLb7VSnr-E06C0xinNRl45XEnuaE0yQz2BDZlpNw5a6wFez3uOLgqMzL~Wq4~2bcrWTY83q4eushWRDB9tgOYcwXx5VdHZs9Qhl7wNQn5dFepAeVRCogH2PXJ8hWxpxWxX-DKBXWNZBYSNw4Evk-zvRNvLhOyvTKvDnR2pmDa0pmO52Fezo10G-FOybgR1kaAa6LdLUauP4QT1UE9f0fq91yjZOwcYUZKGsyg__"
          demoSrc="https://streamable.com/e/pqlryv?autoplay=1&nocontrols=1"
        />
        <Project
          title="Turi"
          description="Last May I had the opportunity to take a mechatronics class abroad in Switzerland at the Zurich University of Applied Sciences. Teams were tasked with constructing a line following robot. This was the first time I experienced a cross-disciplinary team with mechanical engineers, computer engineers, and computer scientists. The aspect of designing software with hardware in mind was an engaging challenge. It was pleasant to develop code that took on a different structure than what I had been used to seeing in my computer science course. It took a few long nights but implementing custom sensor drivers, a proportional control system, a complex state machine, and obstacle avoidance were rewarding. I was proud that our robot came in second place."
          demoThumbnail="https://cdn-cf-east.streamable.com/image/o0d7m_1.jpg?Expires=1681677621353&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=LQOn6XsR5QAaFZQTDiGeQSzsFxfGSu9JRNQAscvOh8O1rIxjHBqEk2tuZeQURoOW1J8kAX7egHJEmOLysdwihVARTuN5QFXiNmcb9VHUOs4fpA3AwkrlayrGlcOGG5exRtSn82tT9RvYRRnAaWsGEwPMyzk8Jzu0nlmHyAMMjFvaQ~ZBaZ3BYJp5JKnJE7t7WnT2BGG5Iyn8LxV~LqbAUGZD5adI94aLTbzkexT5iVZepwz2n6OQgjyl0L29sqCk8M9~jLdAHB-lagPDfhpXKHzXacybTZrF4Er5vhC~ImCxnjlMC3Cbpx4LLvhFf4v-kMzCFNEcsCV0UNLCFCv1qA__"
          demoSrc="https://streamable.com/e/o0d7m?autoplay=1&nocontrols=1"
        />
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
