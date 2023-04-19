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
          //   value={inputTodoRef.current?.value}
        />
        <button
          type="button"
          className="inputBox"
          onClick={() => {
            console.log(inputTodoRef.current?.value);
            addTodo({ variables: { type: inputTodoRef.current?.value } });
          }}
        >
          Add Todo
        </button>

        <h2>{addTodoProps.loading && "Loading..."}</h2>
        {addTodoProps.error && <h2>{addTodoProps.error.message}</h2>}
        {addTodoProps.data && (
          <h3>New object created with ID: - {addTodoProps.data.addTodo.id}</h3>
        )}
      </div>
    </>
  );
};

export default AddTodo;
