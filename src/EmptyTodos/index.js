import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./EmptyTodos.css";

function EmptyTodos({ titulo, mensaje }) {
  return (
    <>
      <div className="row EmptyTodos d-flex justify-content-center">
        <div className="col-12">
          <h1>{titulo}</h1>
        </div>
      </div>
      <div className="row EmptyTodos mt-4 justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <h5>Usa el botón</h5>
          <FontAwesomeIcon
            className="btn-icon text-white me-2 ms-2"
            icon={faPlus}
            size="sm"
          />
          <h5> para agregar una nueva</h5>
        </div>
      </div>
    </>
  );
}

export { EmptyTodos };
