import React, { useRef, useState } from "react";
import "../styles/TodoDisplay.css";
import TodoDisplaySub from "./TodoDisplaySub";
import { useGetTodoQuery, useUpdateTodoMutation } from "../generated/graphql";
import TypeLoadData from "../hooks/TypeLoadData";
import { useTodoLoadData } from "../hooks/useTodo";

const TodoDisplay = () => {
  const getTodoProps = useTodoLoadData();
  const updateTodoRef = useRef(null);
  const [todoUpdateCodegen, todoUpdateCodegenProps] = useUpdateTodoMutation();
  const [updateType, setUpdateType] = useState("");

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
                  handleUpdate={todoUpdateCodegen}
                />
              </div>
            );
          })}
        {/* <TypeLoadData /> */}
      </div>
    </>
  );
};

export default TodoDisplay;
