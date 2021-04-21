import React, { useContext } from "react";
import Context from "../context";

function TodoItem({ todo }) {
  const { removeTodo, togleTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="list-group-item">
      <label className={classes.join(" ")}>
        <input type="checkbox" onChange={() => togleTodo(todo.id)} />
        &nbsp;
        {todo.title}
      </label>
      <span
        className="btn-danger"
        onClick={() => removeTodo(todo.id)}
      />
    </li>
  );
}
export default TodoItem;
