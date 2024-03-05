import React from "react";

function Modal({ children, title, id, button, onBlock }) {
  return (
    <>
      <button
        className={button ? button : "btn bg-egg"}
        onClick={(e) => {
          document.getElementById(id).showModal();
          e.stopPropagation();
        }}
      >
        {title}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box bg-white">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
