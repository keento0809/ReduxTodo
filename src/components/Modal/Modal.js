import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

const ModalOverlayStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: #fff;
  z-index: 10;
`;

const Modal = (props) => {
  const BackDrop = () => {
    return <BackDropStyle onClick={props.onClose}></BackDropStyle>;
  };

  const ModalOverlay = (props) => {
    return (
      <ModalOverlayStyle onClose={props.onClose}>
        {props.children}
      </ModalOverlayStyle>
    );
  };

  const portalElement = document.getElementById("modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.close} />, portalElement)}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
