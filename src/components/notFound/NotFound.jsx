import { useRouteError } from "react-router-dom";

export default function NotFound() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}
