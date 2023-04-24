import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import "../styles/AddTodo.css";
import { ADD_TODO, FRAGMENT_TODO, GET_TODO } from "../mutations/mutations";
import TodoDisplay from "./TodoDisplay";
import { useAddTodoMutation } from "../generated/graphql";

const AddTodo = () => {
  //   const [dummy, setDummy] = useState(true);

  const [useAddTodo, addTodoMutateProps] = useAddTodoMutation({
    update(cache, { data: useAddTodo }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            existingTodos = [...existingTodos, useAddTodo];
            return existingTodos;
          },
        },
      });
    },
  });

  // const [addTodo, addTodoProps] = useMutation(ADD_TODO, {
  //   update(cache, { data: { addTodo } }) {
  //     cache.modify({
  //       fields: {
  //         todos(existingTodos = []) {
  //           existingTodos = [...existingTodos, addTodo];
  //           return existingTodos;
  //         },
  //       },
  //     });
  //   },
  //   // onQueryUpdated(observableQuery) {
  //   //   return observableQuery.refetch(); //Avoid this or cancel it while running
  //   // },
  // });

  //   const [addTodo, addTodoProps] = useMutation(ADD_TODO, {
  //     refetchQueries: [{ query: GET_TODO }],
  //   });

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
            //   value={inputTodoRef.current?.value}
          />
          <button
            type="button"
            className="inputBox"
            onClick={(e) => HandleAddTodo()}
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log(inputTodoRef.current?.value);
            //   // addTodo({ variables: { type: inputTodoRef.current?.value } });
            //   useAddTodo({
            //     variables: { type: inputTodoRef.current?.value || "" },
            //   });
            //   inputTodoRef.current?.setAttribute("value", "");
            //   // setDummy(!dummy);
            // }}
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
