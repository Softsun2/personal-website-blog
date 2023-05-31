import Zine from "../zine/Zine";
import Book from "../zine/layouts/book/Book";
import SinglePage from "../zine/layouts/singlePage/SinglePage";
import s from "./Portfolio.module.css";
import { portfolioPageContents } from "./Pages";
import { useEffect, useState } from "react";
import { aspectRatio, classNames } from "../../util/util";
import { useNavigate, useParams } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  const zineAspectRatio = 210 / 148;
  const [layout, setLayout] = useState(
    aspectRatio() >= zineAspectRatio ? () => Book : () => SinglePage
  );

  useEffect(() => {
    const resize = () => {
      if (layout === Book && aspectRatio() < zineAspectRatio) {
        setLayout(() => SinglePage);
      } else if (layout === SinglePage && aspectRatio() >= zineAspectRatio) {
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

  const navigatePage = (pageIndex) => {
    navigate(`/portfolio/${pageIndex}`);
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
