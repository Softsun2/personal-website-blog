import s from "./Zine.module.css";
import { createElement } from "react";
import { useParams } from "react-router-dom";

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

export default function Zine(props) {
  const { header, pageContents, footer, layout, navigatePage } = props;

  const pageIndex = parseInt(useParams().pageIndex);

  if (!(pageIndex >= 0 && pageIndex < pageContents.length)) {
    throw new Response("Not Found", { status: 404 });
  }

  const getPage = (i) => {
    return (
      <Page header={header} footer={footer}>
        {createElement(pageContents[i], { navigatePage: navigatePage })}
      </Page>
    );
  };

  return (
    <div id={s.zine}>
      {createElement(layout, {
        getPage: getPage,
        navigatePage: navigatePage,
        length: pageContents.length,
      })}
    </div>
  );
}
