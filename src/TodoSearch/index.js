import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="box">
        <input
          type="text"
          className="input"
          name="txt"
          onMouseOut={() => {
            setSearchValue("");
          }}
          onChange={onSearchValueChange}
          value={searchValue}
        />
      </div>
    </>
  );
}

export { TodoSearch };
