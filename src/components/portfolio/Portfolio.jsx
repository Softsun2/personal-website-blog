import Zine from "../zine/Zine";
import Book from "../zine/layouts/book/Book";
import SinglePage from "../zine/layouts/singlePage/SinglePage";
import s from "./Portfolio.module.css";
import { portfolioPageContents } from "./Pages";
import { useEffect, useRef, useState } from "react";
import { aspectRatio } from "../../util/util";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  const zineAspectRatio = 210 / 148;
  const ref = useRef(null);
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

  const navigatePage = (pageIndex) => {
    navigate(`/portfolio/${pageIndex}`);
  };

  return (
    <div id={s.portfolio} ref={ref}>
      <Zine
        layout={layout}
        pageContents={portfolioPageContents}
        footer={null}
        navigatePage={navigatePage}
      />
    </div>
  );
}
