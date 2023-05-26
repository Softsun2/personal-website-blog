import Zine from "../zine/Zine";
import Book from "../zine/layouts/book/Book";
import SinglePage from "../zine/layouts/singlePage/SinglePage";
import { portfolioPageContents } from "./Pages";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [layout, setLayout] = useState(() => Book);

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

  return (
    <div id="portfolio">
      <Zine layout={layout} pageContents={portfolioPageContents} />
    </div>
  );
}
