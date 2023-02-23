import { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import Modal from "../modal/Modal";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
    // console.log("Clicked@!");
    // console.log(props.text);
  }
  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
