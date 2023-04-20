import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_TODO } from "../mutations/mutations";
import "../styles/TodoDisplay.css";

const TodoTypeDisplay = () => {
  const [loadTodoLazy, lazyTodoProps] = useLazyQuery(GET_TODO);

  return (
    <React.Fragment>
      <div>
        <button className="todoInputBox" onClick={() => loadTodoLazy()}>
          Load Lazily
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoTypeDisplay;
