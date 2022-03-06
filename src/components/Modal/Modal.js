import React from "react";
import actions from "../../contextApi/actions";
import { useStateValue } from "../../contextApi/stateProvider";

import "./Modal.css";
const Modal = () => {
  const [{ isModalOpen, personDetail }, dispatch] = useStateValue();

  function confirm() {
    const listStoraged = JSON.parse(window.localStorage.getItem("list"));

    const newList = [...listStoraged].filter((p) => p.id !== personDetail.id);

    window.localStorage.setItem("list", JSON.stringify(newList));

    dispatch({
      type: actions.SET_LIST,
      payload: newList,
    });
    cancel();
  }

  function cancel() {
    dispatch({
      type: actions.CLOSE_MODAL,
    });
  }

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <p className="hidden">fake</p>
          <p>
            Are you sure you want to delete person named "{personDetail.name}" ?
          </p>
          <div className="modal__buttons">
            <button onClick={confirm} className="btn btn__danger">
              Evet
            </button>
            <button onClick={cancel} className="btn ">
              Hayır
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
