import React, { useState, useContext } from 'react'
import Context from '../context'

function AddTodo() {
  const { addTodo } = useContext(Context)
  const [value, setValue] = useState('')

  function submitHandler(e) {
    e.preventDefault()

    if (value.trim()) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <form className="add-group" onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="task-input"
        type="text"
        autocomplete="off"
        placeholder="Add New Task"
      />
      <button type="submit" className="btn-success" title="Add Task"/>
    </form>
  )
}
export default AddTodo
