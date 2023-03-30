/* maybe this is unnecessary? */
export default function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
