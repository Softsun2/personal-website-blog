import { useState, useEffect, useId } from "react";
import { getElementWidth, getElementHeight } from "../../util/util";

export default function ProportionalResize(props) {
  const { className, children } = props;
  const generatedId = useId();
  const id = props.id ? props.id : generatedId;
  const [firstRender, setFristRender] = useState(true);

  useEffect(() => {
    const container = document.getElementById(id);
    const absoluteElement = container.children[0];

    /* this only works if this component is rendered last! */
    if (firstRender && container && absoluteElement) {
      setFristRender(false);
      const scale = Math.min(
        getElementWidth(container) / absoluteElement.offsetWidth,
        getElementHeight(container) / absoluteElement.offsetHeight
      );
      absoluteElement.style.transform = `scale(${scale})`;
    }

    const resize = () => {
      const scale = Math.min(
        getElementWidth(container) / absoluteElement.offsetWidth,
        getElementHeight(container) / absoluteElement.offsetHeight
      );
      absoluteElement.style.transform = `scale(${scale})`;
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      id={id}
      className={className}
      style={firstRender ? { visibility: "hidden" } : {}}
    >
      {children}
    </div>
  );
}
