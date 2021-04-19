import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, onTogle}) {
    console.log(todos);
  return (
    <ul className='list-group'>
        {todos.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} check={onTogle}/>
        })}
      
    </ul>
  );
}

export default TodoList;
