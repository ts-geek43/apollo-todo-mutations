import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../mutations/mutations";

const TodoDisplay = () => {
  const todoProps = useQuery(GET_TODO);

  console.log(todoProps.data);

  return <></>;
};

export default TodoDisplay;
