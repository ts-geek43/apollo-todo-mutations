import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TODO } from "../mutations/mutations";
import "../styles/TodoDisplay.css";
import { UPDATE_TODO } from "../mutations/mutations";

const TodoDisplay = () => {
  const todoProps = useQuery(GET_TODO);
  const updateTodoRef = useRef(null);
  const [updateType, setUpdateType] = useState("");
  const [todoUpdate, todoUpdateProps] = useMutation(UPDATE_TODO);

  //   console.log(todoProps.data);

  const handleUpdate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    console.log(updateTodoRef.current);
    todoUpdate({ variables: { id: id, type: updateType } });
  };

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
              <div id={`${i}`} className="todoDataBox">
                <h4 className="indexBox">{i}</h4>
                <h4 className="colonBox">:</h4>
                <h4 className="idBox">ID - {item.id}</h4>
                <h4 className="colonBox">:</h4>
                <input
                  className="todoInputBox"
                  defaultValue={item.type}
                  onChange={(e) => setUpdateType(e.currentTarget.value)}
                />
                <button
                  className="todoInputBox"
                  type="button"
                  onClick={(e) => {
                    handleUpdate(e, `${item.id}`);
                  }}
                >
                  Update Todo
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoDisplay;
