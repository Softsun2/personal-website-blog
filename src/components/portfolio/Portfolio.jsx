import Zine from "../zine/Zine";
import Book from "../zine/layouts/book/Book";
import SinglePage from "../zine/layouts/singlePage/SinglePage";
import s from "./Portfolio.module.css";
import { portfolioPageContents } from "./Pages";
import { useEffect, useState } from "react";
import { aspectRatio } from "../../util/util";
import { useNavigate } from "react-router-dom";
import { classNames } from "../../util/util";

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

  const footer = ({ page }) => {
    const className = page % 2 === 0 ? "rightPage" : "leftPage";
    return page !== 0 && page !== portfolioPageContents.length - 1 ? (
      <footer className={classNames(s.zineFooter, s[className])}>
        <p>{page}</p>
      </footer>
    ) : null;
  };

  const navigatePage = (pageIndex) => {
    navigate(`/portfolio/${pageIndex}`);
  };

  return (
    <div id={s.portfolio}>
      <Zine
        layout={layout}
        pageContents={portfolioPageContents}
        footer={footer}
        navigatePage={navigatePage}
      />
    </div>
  );
}
