import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

function TodoItem({ todo, onComplete, onDelete }) {
  return (
    <>
      <div className="col">
        <div className="rowPostit">
          <div className="postit">
            {todo.completed ? <h3>Completada</h3> : <h3>Sin completar</h3>}

            <p
              className={`text-break ${todo.completed && "TodoItem_complete"}`}
            >
              -{todo.text}
            </p>

            {!todo.completed && (
              <button
                type="button"
                className="btn btn-completed me-2 text-white"
                onClick={onComplete}
              >
                <FontAwesomeIcon icon={faCheckCircle} size="lg" />
              </button>
            )}

            <button type="button" className="btn btn-danger">
              <FontAwesomeIcon icon={faTrash} onClick={onDelete} size="lg" />
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export { TodoItem };
