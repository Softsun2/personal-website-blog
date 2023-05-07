import { setCookie, getCookie } from "../../util/util";

export default function Welcome(props) {
  const welcomeCookie = getCookie("welcome");
  if (!welcomeCookie) {
    setCookie("welcome", true, 7);
  }
  return welcomeCookie ? null : <div>Welcome</div>;
}
