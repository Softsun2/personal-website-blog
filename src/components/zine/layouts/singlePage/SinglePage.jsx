import s from "./SinglePage.module.css";
import { createElement, useEffect, useState } from "react";
import { Page } from "../../Zine";

export default function SinglePage(props) {
  const { pageContents, header, footer } = props;
  const [page, setPage] = useState(0);

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
        {createElement(content, { setPage: () => setPage(page + 1) })}
      </Page>
    );
  });

  return <div id={s.singlePageZineLayout}>{pages[0]}</div>;
}
