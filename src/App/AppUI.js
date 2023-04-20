import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { HeaderComponet } from "../HeaderComponent";
import { Header } from "../Header";
import { TodoSearch } from "../TodoSearch";
import { EmptyTodos } from "../EmptyTodos";
import { LoadingTodos } from "../LoadingTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Header>
        <HeaderComponet />
      </Header>

      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-md-4 col-sm-12">
            <TodoSearch />
          </div>
        </div>
        <div className="row justify-content-center text-center mb-4">
          {!loading && searchedTodos.length > 0 && <TodoCounter />}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {error && <p>Hubo un error...</p>}

            {loading && <LoadingTodos />}

            {!loading && searchedTodos.length <= 0 && (
              <EmptyTodos
                className="mt-6"
<<<<<<< HEAD
                titulo={"No hay tareas registradas..."}
=======
                titulo={"No tienes tareas registradas..."}
>>>>>>> ed06afcd1e4cbe031d454cd25fb5d75ee9c07fad
              />
            )}

            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  todo={todo}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
        </div>
      </div>

      {!!openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
