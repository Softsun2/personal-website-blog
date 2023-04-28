import Page from "./Page";
import { useState, createElement } from "react";
import s from "./Zine.module.css";

// Zine layouts
export function TwoPageLayout(props) {
  const { page, pages, setPage } = props;
  const pageIndexes =
    page === 0 || page === pages.length - 1 ? [page] : [page, page + 1];

  return (
    <div id={s.twoPageZineLayout}>
      {pageIndexes.map((pageIndex) => {
        const className = pageIndex % 2 === 0 ? "rightPage" : "leftPage";
        return <div className={s[className]}>{pages[pageIndex]}</div>;
      })}
    </div>
  );
}
export function SinglePageLayout(props) {
  const { page, pages, setPage } = props;
  return <div id={s.singlePageZineLayout}>{pages[page]}</div>;
}

export default function Zine(props) {
  const { pageContents, layout } = props;
  const [page, setPage] = useState(0);
  const pages = pageContents.map((content) => {
    return (
      // this is a bug, wrong page!
      <Page page={page} setPage={setPage}>
        {content}
      </Page>
    );
  });

  return (
    <div id={s.zine}>
      {createElement(layout, { setPage: setPage, page: page, pages: pages })}
    </div>
  );
}
