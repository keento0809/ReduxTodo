import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const BackDrop = () => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
  };

  const ModalOverlay = (props) => {
    useEffect(() => {
      console.log("re-rendered");
    }, [props]);

    return (
      <div className={classes.modalOverlay} onClose={props.onClose}>
        {props.children}
      </div>
    );
  };

  const portalElement = document.getElementById("modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
