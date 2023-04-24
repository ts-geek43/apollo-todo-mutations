import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import "../styles/AddTodo.css";
import { ADD_TODO, FRAGMENT_TODO, GET_TODO } from "../mutations/mutations";
import TodoDisplay from "./TodoDisplay";
import { useAddTodoMutation } from "../generated/graphql";

const AddTodo = () => {

  const [useAddTodo, addTodoMutateProps] = useAddTodoMutation({
    update(cache, { data: useAddTodo }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            console.log("Data before adding: - ", existingTodos);
            existingTodos = [
              ...existingTodos,
              { __ref: `Todo:${useAddTodo?.addTodo?.id}` },
            ];
            console.log("Data After adding: - ", existingTodos);

            return existingTodos;
          },
        },
      });
    },
  });


  const HandleAddTodo = () => {
    useAddTodo({
      variables: { type: inputTodoRef.current?.value || "" },
    });
  };

  const inputTodoRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter name of todo"
            className="inputBox"
            ref={inputTodoRef}
          />
          <button
            type="submit"
            className="inputBox"
            onClick={(e) => {
              e.preventDefault();
              HandleAddTodo();
            }}
          >
            Add Todo
          </button>

          <button
            type="button"
            className="inputBox"
            onClick={() => {
              addTodoMutateProps.reset();
            }}
          >
            Reset Mutation
          </button>
          <button
            type="button"
            className="inputBox"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </form>

        <h2>{addTodoMutateProps.loading && "Loading..."}</h2>
        {addTodoMutateProps.error && (
          <h2>{addTodoMutateProps.error.message}</h2>
        )}
        {addTodoMutateProps.data && (
          <h3>
            New object created with ID: - {addTodoMutateProps.data.addTodo?.id}
          </h3>
        )}
      </div>
    </>
  );
};

export default AddTodo;
