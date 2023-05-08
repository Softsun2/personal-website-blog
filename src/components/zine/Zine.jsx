import { useState, createElement } from "react";
import s from "./Zine.module.css";
import { classNames } from "../../util/util";

export function Page(props) {
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
// TODO: Abstract function?

export default function Zine(props) {
  const {
    pageContents, // jsx object - list of the page contents
    layout, // jsx object - Zine layout component
  } = props;

  /* TODO:
    Layouts require proprietary setPage logic.  Maybe zine properties
    should be declared in layouts?
  */
  // const [page, setPage] = useState(0);

  // header and footer should really be Zine parameters
  const Footer = ({ page: page }) => {
    const className = page % 2 === 0 ? "rightPage" : "leftPage";
    return (
      <footer className={classNames(s.zineFooter, s[className])}>
        <p>{page}</p>
      </footer>
    );
  };

  // render with provided layout
  return (
    <div id={s.zine}>
      {createElement(layout, {
        pageContents: pageContents,
        header: null,
        footer: Footer,
      })}
    </div>
  );
}
