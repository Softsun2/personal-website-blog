import s from "./SinglePage.module.css";

export default function SinglePage(props) {
  const { page, pages, setPage } = props;
  return <div id={s.singlePageZineLayout}>{pages[page]}</div>;
}
