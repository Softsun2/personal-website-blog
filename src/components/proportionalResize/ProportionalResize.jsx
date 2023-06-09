import { useState, useEffect, useId } from "react";
import s from "./ProportionalResize.module.css";

/* Intuitive Assumptions:
 *   1. The immediate child of this element is the one being scaled
 *   2. This element acts as a container to its child
 *   3. id and className behave as typical html element attributes
 *   4. This element scales, can have multiple of them rendered
 */
export default function ProportionalResize(props) {
  const { className, children } = props;
  const generatedId = useId();
  const id = props.id ? props.id : generatedId;
  const [firstRender, setFristRender] = useState(true);
  const [style, setStyle] = useState({ visibility: "hidden" });

  useEffect(() => {
    const parent = document.getElementById(id);
    const child = parent.children[0];

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
  }, []);

  return (
    <div id={id} className={s.proportionalResizeElement} style={style}>
      {children}
    </div>
  );
}
