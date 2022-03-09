import React, { Fragment, useEffect } from "react";
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
    useEffect(() => {
      console.log("re-rendered");
    }, [props]);

    return <div onClose={props.onClose}>{props.children}</div>;
  };

  const portalElement = document.getElementById("modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<div></div>, portalElement)};
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
