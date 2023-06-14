import { useRouteError } from "react-router-dom";
import s from "./NotFound.module.css";
import ImageModal from "../imageModal/ImageModal";
import waiting from "../../image/waiting.jpg";

export default function NotFound() {
  let error = useRouteError();
  console.error(error);
  return (
    <div className={s.notFound}>
      File Not Found :(
      <ImageModal className={s.notFoundMedia} src={waiting} alt="WAITING!" />
    </div>
  );
}
