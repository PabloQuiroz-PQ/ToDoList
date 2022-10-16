import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({setOpenModal, openModal}) {
  const onClickButton = () => {
    setOpenModal(revertValue => !revertValue);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
