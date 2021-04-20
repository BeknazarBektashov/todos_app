import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default TodoList;
