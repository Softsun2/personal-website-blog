import s from "./Portfolio.module.css";
import turiVideo from "./turi-video.gif";
import flavoursDemo from "./flavours-demo.gif";

function PortfolioSection(props) {
  const { title, id, children } = props;
  return (
    <div id={id} className={s.portfolioSection}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
function PortfolioSubSection(props) {
  const { subtitle, id, children } = props;
  return (
    <div id={id} className={s.portfolioSubSection}>
      {subtitle && <h3>{subtitle}</h3>}
      {children}
    </div>
  );
}

function PortfolioFigure(props) {
  const { id, src, caption } = props;
  return (
    <div>
      <figure id={id} className={s.figure}>
        <img className={s.portfolioImage} src={src} alt={id} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className={s.portfolio}>
      <h1 className={s.title}>Portfolio</h1>
      <article>
        <PortfolioSection title="TLDR">
          <PortfolioSubSection>
            <p>
              The condensed version of this shpeal is just my <a>resume</a>.
            </p>
          </PortfolioSubSection>
        </PortfolioSection>

        <PortfolioSection title="Intro">
          <PortfolioSubSection>
            <p>
              My name is Peyton Okubo. I’m a person! This is where I'm
              informally displaying my human experience. Experience relevant to
              the community and industry I’m eager to be a part of as a recent
              computer science graduate.
            </p>
          </PortfolioSubSection>
        </PortfolioSection>

        <PortfolioSection title="Education">
          <PortfolioSubSection subtitle="University">
            <p>
              I completed my computer science degree at the University of
              Minnesota Twin Cities in December 2022. I entered university with
              an undeclared major and no prior programming experience. Though, I
              had grown up using computers, a part of me lives within every
              machine I’ve ever used. This prompted me to enroll in an
              introductory computer science course. Immediately I was absorbed
              by the design, implementation, and analytical principles
              associated with programming concepts. It clicked with me, it was
              exciting; it still is. The satisfaction of completing my first
              real coding binge was surreal.
            </p>
            <p>
              Course content engulfed me as I fought to catch up to my more
              experienced classmates. I took care in my studies and sought the
              highest quality solutions I was capable of on assignments.
              Low-level system architecture, functional programming concepts,
              software design paradigms, and web development especially
              captivated me. These topics inspired further independent learning,
              personal projects, and academic involvement as a teacher’s
              assistant. Naturally, it became evident that a career in software
              was for me.
            </p>
          </PortfolioSubSection>
        </PortfolioSection>

        <PortfolioSection title="Experience">
          <PortfolioSubSection subtitle="Teacher's Assistant">
            <p>
              Upon completing projects and assignments I enjoyed helping other
              students on class discussion boards. It was easy to do so online,
              where I could take time to type out thoughtful responses from
              behind the cover of a screen. Especially coming from a position
              where I once needed more help than other students when I began my
              computer science studies. I understood what it was like to not
              pick up things immediately and it sucks. I wanted to help those
              with who I was once in the same position. At the same time, I was
              horridly anxious about taking on a leadership role. I wanted to
              help other students and I wanted to overcome social fears of mine.
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
          </PortfolioSubSection>
          <PortfolioSubSection subtitle="Research Assitant">
            <p>
              Last June I joined a research project associated with the concept
              of storing data on synthesized DNA. My team specifically was
              tasked with publishing an in-house DNA synthesis simulation. My
              role was to develop a benchmarking program to gather hardware
              metrics to analyze the simulation's performance (more importantly
              the multi-agent routing algorithm’s performance). Using Python,
              Pandas, Gephi, a handful of command-line tools, and
              multiprocessing I was able to record over 150,000 data points. I
              presented this data to our team lead and employees of the funding
              company and was then tasked with authoring and revising the
              analytical section of the research paper.
            </p>
          </PortfolioSubSection>
        </PortfolioSection>

        <PortfolioSection title="Projects">
          <PortfolioSubSection subtitle="VI TODO">
            <p>
              VI TODO is a take on the the typical todo web app. VI-TODO uses
              binary space partitioning in a fibonacci layout to display tasks,
              similar to layouts of common unix window managers such as DWM,
              BSPWM, and I3. The user can interact with the todo tasks via basic
              Vi keymaps and motions. Special commands are implemented to filter
              tasks based on completion status. I was motivated to build this
              project to better understand DOM manipulation and more complex
              layout strategies using PUG, Javascript, ExpressJS, MYSQL, and
              CSS.
            </p>
          </PortfolioSubSection>
          <PortfolioSubSection subtitle="Turi">
            <p>
              Last May I had the opportunity to take a mechatronics class abroad
              in Switzerland at the Zurich University of Applied Sciences. Teams
              were tasked with constructing a line following robot.{" "}
              <PortfolioFigure id={s.turiVideo} src={turiVideo} />
              This was the first time I experienced a cross-disciplinary team
              with mechanical engineers, computer engineers, and computer
              scientists. The aspect of designing software with hardware in mind
              was an engaging challenge. It was pleasant to develop code that
              took on a different structure than what I had been used to seeing
              in my computer science course. It took a few long nights but
              implementing custom sensor drivers, a proportional control system,
              a complex state machine, and obstacle avoidance were rewarding. I
              was proud that our robot came in second place.
            </p>
            <p>
              Check out my{" "}
              <a
                href="http://globalblogs.cse.umn.edu/2022/05/saturday-may-21-hiking-adventure.html"
                target="_blank"
                rel="noreferrer"
              >
                blog
              </a>{" "}
              post from the trip!
            </p>
          </PortfolioSubSection>
          <PortfolioSubSection subtitle="This!">
            <p>
              With a growing interest in web development I wanted to learn the
              widely used front-end framework React. The goal of this website
              was to both display my experience as well as structuring a project
              around React. I’m fond of the seamlessness of single page
              applications and the flexibility of components and interfaces.
              However, I’m not sure a React app best suits my use case, as an
              article styled portfolio. I’m interested in building static site
              generator. Stay tuned!
            </p>
          </PortfolioSubSection>
        </PortfolioSection>
        <PortfolioSection title="Personal Endeavors">
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
          <PortfolioSubSection subtitle="Flavours">
            <p>
              I value uniformity and flexibility when it comes to design. I’ve
              been casually theming my desktop environments for about a year now
              and Flavours is the tool I use to do so. Flavours is a tool that
              manages base16 color schemes across common Unix applications.
              Where users can apply color scheme changes in real-time to their
              configured apps via the command line.
            </p>
            <p>
              Flavours was great but its implementation contradicted declarative
              configuration philosophies that are conventional to most Unix
              applications. Namely, configuring the program's set of color
              schemes and templates had to be done imperatively and manually.
            </p>
            <p>
              I took this opportunity to learn the basics of a new language
              (Rust) and made{" "}
              <a
                href="https://github.com/Misterio77/flavours/pull/62#issue-1368726191"
                target="_blank"
                rel="noreferrer"
              >
                my first open-source contribution
              </a>
              . I added new fields to the configuration file to declare the
              color scheme and template sources and provided appropriate
              parsing, retrieving, and installing of these sources. This made it
              so users could declare the sources of their desired color schemes
              and templates in their configuration file for Flavours and the
              sources would be installed automatically
            </p>
            <p>
              I use Flavours in tandem with an image filtering library (Image Go
              Nord) to theme my desktop applications and wallpaper on the fly{" "}
              <PortfolioFigure id={s.flavoursDemo} src={flavoursDemo} />
            </p>
          </PortfolioSubSection>
          <PortfolioSubSection subtitle="Nix">
            <p>
              I manage my systems' configurations and packages with the Nix
              ecosystem. Confusingly Nix is a package manager, language, and
              operating system. Nix packages and Nix configurations are declared
              in the pure functional language Nix. In short, this means one can
              manage an entire system declaratively and reproducibly. Nix has
              its quirks but it allows me to flexibly manage my systems and
              development environments, it also does a wonderful job of
              preventing dependency conflicts.
            </p>
          </PortfolioSubSection>
          <PortfolioSubSection subtitle="Neovim">
            <p>
              Currently, I’m building a Neovim configuration in Lua. Which has
              taught me about language server protocols, language parsing, and
              modular configuration principles.
            </p>
          </PortfolioSubSection>
        </PortfolioSection>
      </article>
    </div>
  );
}
