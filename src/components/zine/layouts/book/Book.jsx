import s from "./Book.module.css";

export default function Book(props) {
  const { page, pages, setPage } = props;
  const pageIndexes =
    page === 0 || page === pages.length - 1 ? [page] : [page, page + 1];

  return (
    <div id={s.book}>
      {pageIndexes.map((pageIndex) => {
        const className = pageIndex % 2 === 0 ? "rightPage" : "leftPage";
        // sets the appropriate page as if you were flipping through a book
        const onClick = () => {
          const inc = pageIndex <= 1 ? 1 : 2;
          const sign = pageIndex % 2 === 0 ? 1 : -1;
          setPage(page + inc * sign);
        };
        return (
          <div onClick={onClick} className={s.bookPage}>
            {pages[pageIndex]}
          </div>
        );
      })}
    </div>
  );
}
