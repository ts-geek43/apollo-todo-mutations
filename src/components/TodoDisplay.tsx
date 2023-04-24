import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TODO } from "../mutations/mutations";
import "../styles/TodoDisplay.css";
import { UPDATE_TODO } from "../mutations/mutations";
import TodoDisplaySub from "./TodoDisplaySub";
import { useGetTodoQuery } from "../generated/graphql";

const TodoDisplay = () => {
  const getTodoProps = useGetTodoQuery();
  const updateTodoRef = useRef(null);
  const [updateType, setUpdateType] = useState("");
  const [todoUpdate, todoUpdateProps] = useMutation(UPDATE_TODO);

  return (
    <>
      <div className="todoDisplayBox" ref={updateTodoRef}>
        <div className="todoUpdateStateBox">
          {getTodoProps.loading && <h3>Updating....</h3>}
          {getTodoProps.error && <h3>{getTodoProps.error.message}</h3>}
        </div>
        {getTodoProps.data?.todos &&
          getTodoProps.data.todos.map((item: any, i: number) => {
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
