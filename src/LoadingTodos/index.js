import React from "react";
import "./LoadingTodos.css";

function LoadingTodos() {
  return (
    <>
      <h3 className="cargando">Cargando tareas, por favor espere...</h3>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </>
  );
}

export { LoadingTodos };
