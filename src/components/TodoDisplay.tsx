import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../mutations/mutations";
import "../styles/TodoDisplay.css";
import { UPDATE_TODO } from "../mutations/mutations";

const TodoDisplay = () => {
  const todoProps = useQuery(GET_TODO);

//   console.log(todoProps.data);   

  return (
    <>
      <div className="todoDisplayBox">
        {todoProps.data &&
          todoProps.data.todos.map((item: any, i: number) => {
            return (
              <div className="todoDataBox">
                <h4 className="indexBox">{i}</h4>
                <h4 className="colonBox">:</h4>
                <h4 className="idBox">ID - {item.id}</h4>
                <h4 className="colonBox">:</h4>
                <input className="todoInputBox" defaultValue={item.type} />
                <button className="todoInputBox" type="button">
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
