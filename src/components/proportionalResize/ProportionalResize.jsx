import { useState, useEffect } from "react";
import s from "./ProportionalResize.module.css";

export default function ProportionalResize(props) {
  const { id, targetId, className, children } = props;
  const [firstRender, setFristRender] = useState(true);
  const [style, setStyle] = useState({ visibility: "hidden" });

  useEffect(() => {
    const parent = document.getElementById(id);
    const child = document.getElementById(targetId);

    /* if first render pre calculate scale */
    if (firstRender && parent && child) {
      setFristRender(false);
      const scale = Math.min(
        parent.offsetWidth / child.offsetWidth,
        parent.offsetHeight / child.offsetHeight
      );
      setStyle({
        transform: `scale(${scale})`,
      });
    }

    const resize = () => {
      const scale = Math.min(
        parent.offsetWidth / child.offsetWidth,
        parent.offsetHeight / child.offsetHeight
      );
      setStyle({
        transform: `scale(${scale})`,
      });
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [firstRender]);

  return (
    <div id={id} className={`className ${s.proportionalResizeContainer}`}>
      <div className={s.proportionalResizeElement} style={style}>
        {children}
      </div>
    </div>
  );
}
