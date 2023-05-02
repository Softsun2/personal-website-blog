import { classNames } from "../../../../util/util";
import s from "./Book.module.css";

export default function Book(props) {
  const { page, pages, setPage } = props;
  const pageIndexes =
    page === 0 || page === pages.length - 1 ? [page] : [page, page + 1];

  return (
    <div id={s.book}>
      {pageIndexes.map((pageIndex) => {
        const className = pageIndex % 2 === 0 ? "rightPage" : "leftPage";
        // responsible for book like page flipping behavior
        const onClick = () => {
          const inc = pageIndex <= 1 ? 1 : 2;
          const sign = pageIndex % 2 === 0 ? 1 : -1;
          setPage(page + inc * sign);
        };
        return (
          <div className={classNames(s.bookPage, s[className])}>
            <div onClick={onClick} className={s.pageFlipper}></div>
            {pages[pageIndex]}
          </div>
        );
      })}
    </div>
  );
}
