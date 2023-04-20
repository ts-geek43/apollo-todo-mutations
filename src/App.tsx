import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoDisplay from "./components/TodoDisplay";
import TodoTypeDisplay from "./components/TodoTypeDisplay";

function App() {
  return (
    <div className="App-header">
      <h1> Apollo Client Mutation Practice</h1>

      <AddTodo />
      <TodoDisplay />
      <TodoTypeDisplay />
    </div>
  );
}

export default App;
