import { useSelector } from "react-redux";
import "./Modal.css";

const Modal = () => {
  const dialog = useSelector((state) => state.dialog);
  const isModalOpen = useSelector((state) => state.isModalOpen);

  //disabling scroll
  const body = window.document.body;
  body.style = `overflow-y : ${isModalOpen ? "hidden" : "overlay"}`;

  return (
    isModalOpen && (
      <div className="backdrop">
        <div className="dialogBox">
          <p className="dialogBox__question">
            Ürünü silmek istediğinize emin misiniz?
          </p>
          <hr />
          <p className="dialogBox__text">{dialog.description}</p>
          <div className="dialogBox__buttons">
            <button className="dialog__btn confirm" onClick={dialog.confirm}>
              EVET
            </button>
            <button className="dialog__btn reject" onClick={dialog.reject}>
              HAYIR
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
