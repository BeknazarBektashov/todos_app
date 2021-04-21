import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Context from './context'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Create TodoList' },
    { id: 2, completed: false, title: 'Create TodoItem' },
    { id: 3, completed: false, title: 'Create AddTodo' },
  ])

  function addTodo(title) {
    setTodos(
      todos.concat({
        id: Math.round(Math.random() * 10),
        completed: false,
        title,
      })
    )
  }
  function togleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo, togleTodo, addTodo }}>
      <div className="container">
        <div className="card">
        <h1>TO DO LIST</h1>
          <AddTodo />
          <TodoList todos={todos} />
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
