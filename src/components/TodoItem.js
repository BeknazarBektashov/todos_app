import React, { useContext } from "react";
import Context from "../context";

function TodoItem({ todo }) {
  const { removeTodo, togleTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={classes.join(" ")}>
        <input type="checkbox" onChange={() => togleTodo(todo.id)} />
        &nbsp;
        {todo.title}
      </span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => removeTodo(todo.id)}
      >
        &times;
      </button>
    </li>
  );
}
export default TodoItem;
