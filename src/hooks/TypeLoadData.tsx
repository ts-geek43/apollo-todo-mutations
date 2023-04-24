import React from "react";
import { useGetTodoTypeQuery, useGetTodoQuery } from "../generated/graphql";

const TypeLoadData = () => {
  const todoQueryProps = useGetTodoQuery();

  if (todoQueryProps.loading) {
    return (
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        Loading . . .
      </h1>
    );
  }

  if (todoQueryProps.error) {
    return (
      <h2
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {todoQueryProps.error.message}
      </h2>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {todoQueryProps.data &&
        todoQueryProps.data.todos?.map((item: any) => {
          console.log(item);
          return <h5>{item.type}</h5>;
        })}
    </div>
  );
};

export default TypeLoadData;
