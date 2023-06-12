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

    // first render
    if (firstRender && container && absoluteElement) {
      setFristRender(false);
      const scale = Math.min(
        getElementWidth(container) / absoluteElement.offsetWidth,
        getElementHeight(container) / absoluteElement.offsetHeight
      );
      absoluteElement.style.transform = `scale(${scale})`;
    }

    // element resize event
    const resizeObserver = new ResizeObserver(() => {
      const scale = Math.min(
        getElementWidth(container) / absoluteElement.offsetWidth,
        getElementHeight(container) / absoluteElement.offsetHeight
      );
      absoluteElement.style.transform = `scale(${scale})`;
    });
    resizeObserver.observe(container);

    // clean-up
    return () => {
      resizeObserver.unobserve(container);
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
