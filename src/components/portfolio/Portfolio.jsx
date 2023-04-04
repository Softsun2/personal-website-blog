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
    title="TLDR"
    subsections={
      <PortfolioSubsection
        content={
          <div>
            <p>
              This shpeal is summarized in my{" "}
              <a href="../../media/master-Peyton-Okubo.pdf">resume</a>.
            </p>
          </div>
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
          <div>
            <p className={s.columns}>
              My name is Peyton Okubo. This is where I'm informally displaying
              my human experience. Experience relevant to the community and
              industry I’m eager to be a part of as a recent computer science
              graduate.
            </p>
          </div>
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
          <div>
            <p className={s.columns}>
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
              assistant. It became evident that a career in software was for me.
            </p>
          </div>
        }
      />
    }
  />
);
const personalEndeavors = (
  <PortfolioSection
    title="Personal Endeavors"
    subsections={[
      <PortfolioSubsection
        title=""
        content={
          <div>
            <p className={s.columns}>
              I was drawn into the world of configuration and personalized
              development environments by the text editor Vim. Building a
              customized text editor with the minimum features to suit my needs
              appealed to me. I like to know how my software works; I like to be
              in control of how my software works. I like when my software does
              exactly what it should and no more. There are considerable
              drawbacks to minimizing/personalizing your development tools;
              using these tools is a hobby of mine and I only do so when I can
              get away with it. Working with lower-level applications has taught
              me much about operating systems and command-line workflow. This
              led me down a rabbit hole of configurability and reproducibility
              philosophies.
            </p>
          </div>
        }
      />,
      <PortfolioSubsection
        title="Neovim"
        content={
          <div>
            <p className={s.columns}>
              Currently, I’m building a Neovim configuration in Lua. Which has
              taught me about language server protocols, language parsing, and
              modular configuration principles.
            </p>
          </div>
        }
      />,
      <PortfolioSubsection
        title="Nix"
        content={
          <div>
            <p className={s.columns}>
              I manage my systems configurations and packages with the Nix
              ecosystem. Confusingly Nix is a package manager, language, and
              operating system. Nix packages and Nix configurations are declared
              as in the pure functional expression language Nix. In short, this
              means one can manage an entire system declaratively and
              reproducibly. Nix has its quirks but it allows me to flexibly
              manage my systems and development environments, it also does a
              wonderful job of preventing dependency conflicts.
            </p>
          </div>
        }
      />,
      <PortfolioSubsection
        title="Flavours"
        content={
          <div>
            <p className={s.columns}>
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
              (Rust) and made my first open-source contribution. I added new
              fields to the configuration file to declare the color scheme and
              template sources and provided appropriate parsing, retrieving, and
              installing of these sources. This made it so users could declare
              the sources of their desired color schemes and templates in their
              configuration file for Flavours and the sources would be installed
              automatically.
            </p>
          </div>
        }
      />,
    ]}
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
      {personalEndeavors}

      {/* contacts shouldn't be a PortfolioSection component */}
      {contacts}
    </div>
  );
}
