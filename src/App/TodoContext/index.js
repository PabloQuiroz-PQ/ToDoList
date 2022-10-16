import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length; // !! - Valida si es true
  const totalTodos = todos.length;

  //CADA VEZ QUE USAMOS UN USE STATE (setSearchValue o setTodos) EL COMPONENTE APP SE RENDERIZA
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({ completed: false, text: text });

    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos[todosIndex].completed = true;

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todosIndex, 1);
    saveTodos(newTodos);
  };

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
