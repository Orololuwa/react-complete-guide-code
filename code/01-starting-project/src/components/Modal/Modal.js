import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTimimg = {
  enter: 300,
  exit: 1000
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimimg}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpening",
        exit: "",
        exitActive: "ModalClosing"
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
