// formats a list of class names for CSS
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// composes components
function composeComponents(...components) {
  return <div>{components}</div>;
}

export { classNames, composeComponents };
