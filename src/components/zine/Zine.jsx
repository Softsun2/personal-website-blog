import { useState, createElement } from "react";
import s from "./Zine.module.css";
import { classNames } from "../../util/util";

function Page(props) {
  const { header, children, footer } = props;
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}

// TODO: header + footer should be zine properties
export default function Zine(props) {
  const {
    pageContents, // jsx object - list of the page contents
    layout, // jsx object - Zine layout component
  } = props;
  const [page, setPage] = useState(0);

  // header and footer should really be Zine parameters
  const Footer = ({ page: page }) => {
    const className = page % 2 === 0 ? "rightPage" : "leftPage";
    return (
      <footer className={classNames(s.zineFooter, s[className])}>
        <p>{page}</p>
      </footer>
    );
  };

  const pages = pageContents.map((content, i) => {
    // wrap contents with setPage
    return (
      <Page footer={i > 0 ? <Footer page={i} /> : null}>
        {createElement(content, { setPage: setPage })}
      </Page>
    );
  });

  // render with provided layout
  return (
    <div id={s.zine}>
      {createElement(layout, { setPage: setPage, page: page, pages: pages })}
    </div>
  );
}
