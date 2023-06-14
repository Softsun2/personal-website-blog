import { useEffect, useState } from "react";
import s from "./ImageModal.module.css";
import { createPortal } from "react-dom";

export default function ImageModal(props) {
  const { id, className, src, alt } = props;
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const keyUp = (e) => {
      if (modal && e.code === "Escape") {
        setModal(false);
      }
    };
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  });

  const imgNode = (
    <img
      onClick={() => setModal(true)}
      id={id}
      className={className}
      src={src}
      alt={alt}
    />
  );
  const modalNode = (
    <div>
      <div className={s.modal}>
        <img className={s.image} src={src} alt={alt} />
        <button className={s.exitModal} onClick={() => setModal(false)}>
          x
        </button>
      </div>
      <div className={s.modalBackdrop} onClick={() => setModal(false)}></div>
    </div>
  );

  return modal ? createPortal(modalNode, document.body) : imgNode;
}
