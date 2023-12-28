import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";

const AddTodo = ({ input, setInput, handleSubmit, setSearch }) => {
  const inputRef = useRef();
  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        id='add-listitem'
        className='form-input'
        type="text"
        placeholder='Add todo'
        autoFocus
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        required
      />
      <button
        className='btn'
        type='submit'
        onClick={() => inputRef.current.focus()}
      ><FaPlus /></button>
    </form>
  )
}

export default AddTodo