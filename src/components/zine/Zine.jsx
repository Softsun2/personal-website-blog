import s from "./Zine.module.css";
import { createElement } from "react";
import { useParams } from "react-router-dom";
import { getCookie, setCookie } from "../../util/util";
import ArrowKeyHint from "../arrowKeyHint/ArrowKeyHint";

export function Page(props) {
  const { header, children, footer } = props;
  return (
    // TODO: Eliminate this unnecessary div
    <div className={s.zinePage}>
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

  const familiarCookie = getCookie("familiar");
  if (!familiarCookie) {
    setCookie("familiar", true, 7);
  }

  const getPage = (i) => {
    return (
      <Page header={header} footer={createElement(footer, { page: i })}>
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
        familiar: familiarCookie,
      })}
      {!familiarCookie && <ArrowKeyHint />}
    </div>
  );
}
