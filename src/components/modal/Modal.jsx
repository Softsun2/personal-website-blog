import s from "./Modal.module.css";

export default function Modal(props) {
  const { setModalState, children } = props;
  return (
    <div>
      <div className={s.modal}>
        <div className={s.modalContent}>{children}</div>
        <button className={s.exitModal} onClick={() => setModalState(false)}>
          x
        </button>
      </div>
      <div
        className={s.modalBackdrop}
        onClick={() => setModalState(false)}
      ></div>
    </div>
  );
}
