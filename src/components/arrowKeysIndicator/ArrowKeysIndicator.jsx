import { classNames } from "../../util/util";
import s from "./ArrowKeysIndicator.module.css";

export default function ArrowKeysIndicator(props) {
  return window.Touch (
    <div className={s.arrowKeysIndicator}>
      <div className={s.upArrow}>
        <p>^</p>
      </div>
      <div className={s.downArrow}>
        <p>V</p>
      </div>
      <div className={classNames(s.leftArrow, s.blink)}>
        <p>{"<"}</p>
      </div>
      <div className={classNames(s.rightArrow, s.blink)}>
        <p>{">"}</p>
      </div>
    </div>
  );
}
