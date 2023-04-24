import React from "react";
import { useAddTodoMutation } from "../generated/graphql";

const AddTodo = (props: any) => {
  const { type } = props;

  const [addTodo, { loading, error, data }] = useAddTodoMutation();

  if (type) {
    addTodo({ variables: { type: type } });
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: - {error.message}</h2>;
  }

  if(data){
    return (<h3>New object created with ID: - {data.addTodo?.id}</h3>);
  }

};

export default AddTodo;
