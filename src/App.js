import React from "react";

import TodoListWithConditionalRendering from "./components/TodoListWithConditionalRendering";

const todos = ["1", "2", "3"];
const isLoadingTodos = false;

export default function App() {
  return (
    <TodoListWithConditionalRendering
      todos={todos}
      isLoadingTodos={isLoadingTodos}
    />
  );
}
