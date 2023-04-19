import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import "../styles/AddTodo.css";
import { ADD_TODO, FRAGMENT_TODO, GET_TODO } from "../mutations/mutations";
import TodoDisplay from "./TodoDisplay";

const AddTodo = () => {
  //   const [dummy, setDummy] = useState(true);

  const [addTodo, addTodoProps] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            existingTodos = [...existingTodos, addTodo];
            return existingTodos;
          },
        },
      });
    },
    onQueryUpdated(observableQuery) {
      return observableQuery.refetch(); //Avoid this or cancel it while running
    },
  });

  //   const [addTodo, addTodoProps] = useMutation(ADD_TODO, {
  //     refetchQueries: [{ query: GET_TODO }],
  //   });

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
            inputTodoRef.current?.setAttribute("value", "");
            // setDummy(!dummy);
          }}
        >
          Add Todo
        </button>

        <button
          type="button"
          className="inputBox"
          onClick={() => {
            addTodoProps.reset();
          }}
        >
          Reset Mutation
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
