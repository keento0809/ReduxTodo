import React from "react";
import Modal from "../../Modal/Modal";

const EditTask = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <p>TEST text in modal.</p>
        <p>aaaaaa</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default EditTask;
