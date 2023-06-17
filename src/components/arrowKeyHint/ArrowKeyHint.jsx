import { classNames } from "../../util/util";
import s from "./ArrowKeyHint.module.css";

export default function ArrowKeyHint(props) {
  return (
    <div className={s.arrowKeysIndicator}>
      <p className={s.upArrow}>^</p>
      <p className={s.downArrow}>V</p>
      <p className={classNames(s.leftArrow, s.blink)}>{"<"}</p>
      <p className={classNames(s.rightArrow, s.blink)}>{">"}</p>
    </div>
  );
}
