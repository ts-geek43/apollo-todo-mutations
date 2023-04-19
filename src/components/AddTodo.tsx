import { useMutation } from "@apollo/client";
import React, { useRef } from "react";
import "../styles/AddTodo.css";
import { ADD_TODO } from "../mutations/mutations";

const AddTodo = () => {
  const [addTodo, addTodoProps] = useMutation(ADD_TODO);
  const inputTodoRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter name of todo"
          className="inputBox"
          ref={inputTodoRef}
        />
        <button
          type="button"
          className="inputBox"
          onClick={() => console.log(inputTodoRef.current?.value)}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
