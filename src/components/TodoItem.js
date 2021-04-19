import React from "react";

function TodoItem({todo, check}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>
            <input type='checkbox'onChange={check(todo.id)}/>
            &nbsp;
            {todo.title}
        </span>
       <button className="btn btn-sm btn-danger">&times;</button>
    </li>
  );
}
export default TodoItem;
