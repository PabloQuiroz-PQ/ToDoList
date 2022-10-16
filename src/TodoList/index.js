import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.children}
      </div>
    </>
  );
}

export { TodoList };
