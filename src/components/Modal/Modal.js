import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

import styled from "styled-components";

const ModalOverlayStyle = styled.div`
  padding: 2rem;
  background: aquamarine;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid aquamarine;
  border-radius: 12px;
  z-index: 10;
`;

const Modal = (props) => {
  const BackDrop = () => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
  };

  useEffect(() => {
    console.log("re-rendered");
  }, [props]);

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
        // <ModalOverlay>{props.children}</ModalOverlay>,
        <ModalOverlayStyle>{props.children}</ModalOverlayStyle>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
