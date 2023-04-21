import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TODO } from "../mutations/mutations";
import "../styles/TodoDisplay.css";
import { UPDATE_TODO } from "../mutations/mutations";
import TodoDisplaySub from "./TodoDisplaySub";

const TodoDisplay = () => {
  const todoProps = useQuery(GET_TODO);
  const updateTodoRef = useRef(null);
  const [updateType, setUpdateType] = useState("");
  const [todoUpdate, todoUpdateProps] = useMutation(UPDATE_TODO);

  return (
    <>
      <div className="todoDisplayBox" ref={updateTodoRef}>
        <div className="todoUpdateStateBox">
          {todoUpdateProps.loading && <h3>Updating....</h3>}
          {todoUpdateProps.error && <h3>{todoUpdateProps.error.message}</h3>}
        </div>
        {todoProps.data &&
          todoProps.data.todos.map((item: any, i: number) => {
            return (
              <div key={`${i}`} className="todoDataBox">
                <TodoDisplaySub
                  i={i}
                  item={item}
                  handleUpdate={todoUpdate}
                  setUpdateType={setUpdateType}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoDisplay;
