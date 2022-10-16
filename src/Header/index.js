import React from "react";
import ReactDOM from "react-dom";

function Header({ children }) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("header")
  );
}

export { Header };