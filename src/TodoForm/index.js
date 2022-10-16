import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoForm.css";

function TodoForm({ setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>¡Agrega tu siguiente tarea!</label>
      <textarea
      className="form-control"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ej. Realizar tarea de inglés"
        rows="6"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn_TodoForm text-white">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
