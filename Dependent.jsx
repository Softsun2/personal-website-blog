import { createElement } from "react";

export default function Dependent(props) {
  const { dependency, dependent } = props;
  const onLoad = () => {
    return createElement(dependent);
  };
  return createElement(dependency, {
    onLoad: onLoad,
  });
}
