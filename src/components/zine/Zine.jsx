import { useState, createElement } from "react";
import s from "./Zine.module.css";

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

export default function Zine(props) {
  const {
    pageContents, // jsx object - list of the page contents
    layout, // jsx object - Zine layout component
    spine, // img - an image used as the spine of the zine
  } = props;
  const [page, setPage] = useState(0);

  // header and footer should really be Zine parameters
  const Footer = ({ page: page }) => {
    return (
      <footer>
        <p>{page}</p>
      </footer>
    );
  };

  const pages = pageContents.map((content, i) => {
    // wrap contents with setPage
    return (
      <Page className={s.zineFooter} footer={<Footer page={i} />}>
        {createElement(content, { setPage: setPage })}
      </Page>
    );
  });

  // render with provided layout
  return createElement(layout, { setPage: setPage, page: page, pages: pages });
}
