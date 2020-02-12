import React from "react";

import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => (
        <div>
          <TodoItem key={todo.id} todo={todo} />
        </div>
      ))}
    </div>
  );
}
