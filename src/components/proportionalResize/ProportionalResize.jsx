import { useState, useEffect, useId } from "react";
import { getElementWidth, getElementHeight } from "../../util/util";

/* Intuitive Assumptions:
 *   1. The immediate child of this element is the one being scaled
 *   2. This element acts as a container to its child
 *   3. id and className behave as typical html element attributes
 *   4. This element scales, can have multiple of them rendered
 *   5. padding & other boxmodel styles work as expected
 */
export default function ProportionalResize(props) {
  const { className, children } = props;
  const generatedId = useId();
  const id = props.id ? props.id : generatedId;
  const [firstRender, setFristRender] = useState(true);
  const [style, setStyle] = useState({ visibility: "hidden" });

  useEffect(() => {
    const container = document.getElementById(id);
    const absoluteElement = container.children[0].children[0];
    console.log(getComputedStyle(container));

    /* if first render pre calculate scale */
    if (firstRender && container && absoluteElement) {
      setFristRender(false);
      const scale = Math.min(
        getElementWidth(container) / absoluteElement.offsetWidth,
        getElementHeight(container) / absoluteElement.offsetHeight
      );
      setStyle({
        transform: `scale(${scale})`,
      });
    }

    const resize = () => {
      const scale = Math.min(
        getElementWidth(container) / absoluteElement.offsetWidth,
        getElementHeight(container) / absoluteElement.offsetHeight
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
    <div id={id} className={className}>
      <div style={style}>{children}</div>
    </div>
  );
}
