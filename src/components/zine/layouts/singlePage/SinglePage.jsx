import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProportionalResize from "../../../proportionalResize/ProportionalResize";
import s from "./SinglePage.module.css";
import { classNames } from "../../../../util/util";

export default function SinglePage(props) {
  const { getPage, navigatePage, length, familiar } = props;
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
    <ProportionalResize id={s.singlePageLayout}>
      <div id={s.singlePage}>
        {pageIndex > 0 && (
          <div
            onClick={() => flipPage(false)}
            className={classNames(
              s.leftPageFlipper,
              !familiar ? s.blink : null
            )}
          ></div>
        )}
        {pageIndex < length && (
          <div
            onClick={() => flipPage(true)}
            className={classNames(
              s.rightPageFlipper,
              !familiar ? s.blink : null
            )}
          ></div>
        )}
        {getPage(pageIndex)}
      </div>
    </ProportionalResize>
  );
}
