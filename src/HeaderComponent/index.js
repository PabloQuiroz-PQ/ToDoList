import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./HeaderComponet.css";

function HeaderComponet() {
  const [scrollValue, setScrollValue] = React.useState(0);
  window.addEventListener("scroll", (e) => {
    setScrollValue(window.scrollY);
  });
  return (
    <React.Fragment>
      <div
        className={`HeaderComponet ${
          scrollValue > 10 ? "header small" : "header"
        }`}
      >
        <h1
          className={`${
            scrollValue > 10 ? "header_logo header_logo_small" : "header_logo"
          }`}
        >
          <FontAwesomeIcon
            className="animate__animated animate__bounce me-2"
            icon={faCircleCheck}
          />
          To Do List
        </h1>
        {scrollValue < 10 && (
          <h6 className="mt-3">Todas tus tareas en post-it </h6>
        )}
      </div>
      <div
        className={`${scrollValue > 10 ? "offset offset_small" : "offset"}`}
      ></div>
    </React.Fragment>
  );
}

export { HeaderComponet };
