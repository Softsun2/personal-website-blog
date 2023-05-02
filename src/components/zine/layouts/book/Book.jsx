import { classNames } from "../../../../util/util";
import s from "./Book.module.css";

export default function Book(props) {
  const { page, pages, setPage } = props;
  const pageIndexes =
    page === 0 || page === pages.length - 1 ? page : [page, page + 1];

  return (
    <div id={s.book}>
      {pageIndexes.map((pageIndex) => {
        const className = pageIndex % 2 === 0 ? "rightPage" : "leftPage";
        return <div className={s.bookPage}>{pages[pageIndex]}</div>;
      })}
    </div>
  );
}
