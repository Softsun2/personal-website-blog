import Zine from "../zine/Zine";
import Book from "../zine/layouts/book/Book";
import SinglePage from "../zine/layouts/singlePage/SinglePage";
import s from "./Portfolio.module.css";
import { portfolioPageContents } from "./Pages";
import { useEffect, useState } from "react";
import { classNames } from "../../util/util";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  const [layout, setLayout] = useState(
    window.innerWidth >= 768 ? () => Book : () => SinglePage
  );

  useEffect(() => {
    const resize = () => {
      if (layout === Book && window.innerWidth < 768) {
        setLayout(() => SinglePage);
      } else if (layout === SinglePage && window.innerWidth >= 768) {
        setLayout(() => Book);
      }
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const Footer = ({ page }) => {
    const className = page % 2 === 0 ? "rightPage" : "leftPage";
    return (
      <footer className={classNames(s.zineFooter, s[className])}>
        <p>{page}</p>
      </footer>
    );
  };

  const navigatePage = (page) => {
    navigate(`/portfolio/${page}`);
  };

  return (
    <div id="portfolio">
      <Zine
        layout={layout}
        pageContents={portfolioPageContents}
        footer={Footer}
        navigatePage={navigatePage}
      />
    </div>
  );
}
