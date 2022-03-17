import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

import styled from "styled-components";
import PaperUI from "../UI/PaperUI";
import { Paper } from "@mui/material";

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

  const portalElement = document.getElementById("modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        // Original code
        <ModalOverlayStyle>{props.children}</ModalOverlayStyle>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
