import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoCounter.css"

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <>
      <h4 className="TodoCounter">
       ¡Has Completado {completedTodos} de {totalTodos} Tareas!
      </h4>
    </>
  );
}

export { TodoCounter };
