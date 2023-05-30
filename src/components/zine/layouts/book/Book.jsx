import { createElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "../../../../util/util";
import s from "./Book.module.css";

const BookPage = (props) => {
  const { page, leftPage, flipPage } = props;
  const className = leftPage ? "leftPage" : "rightPage";
  const clickToFlipPage = leftPage
    ? () => flipPage(false)
    : () => flipPage(true);
  return (
    <div className={classNames(s.bookPage, s[className])}>
      <div onClick={clickToFlipPage} className={s.pageFlipper}></div>
      {page}
    </div>
  );
};

export default function Book(props) {
  const { getPage, navigatePage, length } = props;
  let pageIndex = parseInt(useParams().pageIndex);

  if (pageIndex >= length) {
    /* throw a 404 not found */
  }
  if (pageIndex > 0) {
    /* TODO: consider rerouting to normalized pageIndex if even */
    pageIndex = 2 * Math.round(pageIndex / 2) - 1; /* round down to odd */
  }

  const flipPage = (forward) => {
    const nextOdd = (n) => (n % 2 === 0 ? n + 1 : n + 2);
    const lastOdd = (n) => (n % 2 === 0 ? n - 1 : n - 2);
    if (forward && pageIndex < length - 1) {
      navigatePage(nextOdd(pageIndex));
    } else if (!forward && pageIndex > 1) {
      navigatePage(lastOdd(pageIndex));
    } else if (!forward && pageIndex === 1) {
      navigatePage(pageIndex - 1);
    }
  };

  useEffect(() => {
    const keyUp = (e) => {
      if (e.code === "ArrowRight") {
        flipPage(true);
      } else if (e.code === "ArrowLeft") {
        flipPage(false);
      }
    };
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  });

  const isCover = pageIndex === 0 || pageIndex === length - 1;

  return (
    <div id={s.bookLayout}>
      {isCover && (
        <BookPage
          page={getPage(pageIndex)}
          leftPage={pageIndex % 2 !== 0}
          flipPage={flipPage}
        />
      )}
      {!isCover && [
        <BookPage
          page={getPage(pageIndex)}
          leftPage={true}
          flipPage={flipPage}
        />,
        <BookPage
          page={getPage(pageIndex + 1)}
          leftPage={false}
          flipPage={flipPage}
        />,
      ]}
    </div>
  );
}
