import React from "react";
import { useGetTodoLazyQuery } from "../generated/graphql";
import "../styles/TodoDisplay.css";

const TodoTypeDisplay = () => {
  const [loadTodoLazy, lazyTodoProps] = useGetTodoLazyQuery();

  console.log("Lazily loaded data: - ", lazyTodoProps.data?.todos);
  return (
    <React.Fragment>
      <div>
        <button className="todoInputBox" onClick={() => loadTodoLazy()}>
          Load Lazily
        </button>

        {lazyTodoProps.loading && <h2>Loading....</h2>}
        {lazyTodoProps.error && <h2>Error....</h2>}
        {lazyTodoProps.data &&
          lazyTodoProps.data.todos?.map((item: any) => {
            return <h5>{item.type}</h5>;
          })}
      </div>
    </React.Fragment>
  );
};

export default TodoTypeDisplay;
