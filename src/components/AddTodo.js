import React, {useState} from "react";

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(e){
        e.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }

  return (
    <form className='d-flex' onSubmit={submitHandler}>
      <input value={value} onChange={e => setValue(e.target.value)} className="form-control m-1" type="text" />
      <button type="submit" className="btn btn-sm btn-success m-1">
        Add Todo
      </button>
    </form>
  );
}
export default AddTodo;
