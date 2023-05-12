import { createElement, useEffect, useState } from "react";
import { classNames } from "../../../../util/util";
import { Page } from "../../Zine";
import s from "./Book.module.css";

// this can be drastically cleaned up, for now this layout is fine

function flipPage(forward, page, pages, setPage) {
  function nextOdd(n) {
    return n % 2 === 0 ? n + 1 : n + 2;
  }
  function lastOdd(n) {
    return n % 2 === 0 ? n - 1 : n - 2;
  }
  function lastEven(n) {
    return n % 2 === 1 ? n - 1 : n - 2;
  }

  let newPage = -1;
  if (forward) {
    newPage = nextOdd(page);
  } else {
    if (page <= 2) {
      newPage = lastEven(page);
    } else {
      newPage = lastOdd(page);
    }
  }

  if (0 <= newPage && newPage < pages) {
    setPage(newPage);
  }
}

export default function Book(props) {
  const { pageContents, header, footer } = props;
  const [page, setPage] = useState(0);

  // book set page logic
  function setBookPage(page) {
    const bookPage = page !== 0 && page % 2 === 0 ? page - 1 : page;
    setPage(bookPage);
  }

  // create pages from contents, header, and footer
  const pages = pageContents.map((content, i) => {
    return (
      <Page
        footer={
          i !== 0 && i !== pageContents.length - 1
            ? createElement(footer, { page: i })
            : null
        }
      >
        {createElement(content, { setPage: setBookPage })}
      </Page>
    );
  });

  // page flip with arrow keys
  useEffect(() => {
    const keyUp = (e) => {
      if (e.code === "ArrowRight") {
        flipPage(true, page, pages.length, setPage);
      } else if (e.code === "ArrowLeft") {
        flipPage(false, page, pages.length, setPage);
      }
    };
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  });

  const pageIndexes =
    page === 0 || page === pages.length - 1 ? [page] : [page, page + 1];

  return (
    <div id={s.book}>
      {pageIndexes.map((pageIndex) => {
        const className = pageIndex % 2 === 0 ? "rightPage" : "leftPage";
        // responsible for book like page flipping behavior
        const clickToFlipPage = () => {
          if (className === "rightPage") {
            flipPage(true, pageIndex, pages.length, setPage);
          } else {
            flipPage(false, pageIndex, pages.length, setPage);
          }
        };
        return (
          <div className={classNames(s.bookPage, s[className])}>
            <div onClick={clickToFlipPage} className={s.pageFlipper}></div>
            {pages[pageIndex]}
          </div>
        );
      })}
    </div>
  );
}
