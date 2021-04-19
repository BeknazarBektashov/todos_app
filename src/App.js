import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Create TodoList" },
    { id: 2, completed: false, title: "Create TodoItem" },
    { id: 3, completed: false, title: "Create AddTodo" },
  ]);

  function addTodo(title){
    setTodos(todos.concat({
      id: Math.random(), completed: false, title
    }))
  }
  function togleTodo(id){
    // setTodos(todos.map(todo => {
    //   if(todo.id === id){
    //     todo.completed = !todo.completed
    //   }
    // }))
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto">
        <AddTodo onCreate={addTodo}/>
        <hr />
        <TodoList todos={todos} onTogle={togleTodo}/>
      </div>
    </div>
  );
}

export default App;
