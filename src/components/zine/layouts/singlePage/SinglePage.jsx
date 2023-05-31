import { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./SinglePage.module.css";

export default function SinglePage(props) {
  const { getPage, navigatePage, length } = props;
  const pageIndex = parseInt(useParams().pageIndex);

  const flipPage = (forward) => {
    if (forward && pageIndex < length - 1) {
      navigatePage(pageIndex + 1);
    } else if (!forward && pageIndex > 0) {
      navigatePage(pageIndex - 1);
    }
  };

  useEffect(() => {
    const keyUp = (e) => {
      if (e.code === "ArrowRight") {
        flipPage(true);
      } else if (e.code === "ArrowLeft") {
        flipPage(false);
      }
    };
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  });

  return (
    <div id={s.singlePageLayout}>
      <div className={s.page}>
        {pageIndex > 0 && (
          <div
            onClick={() => flipPage(false)}
            className={s.leftPageFlipper}
          ></div>
        )}
        {pageIndex < length && (
          <div
            onClick={() => flipPage(true)}
            className={s.rightPageFlipper}
          ></div>
        )}
        {getPage(pageIndex)}
      </div>
    </div>
  );
}
