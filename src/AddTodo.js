import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";

const AddTodo = ({input, setInput, handleSubmit}) => {
    const inputRef = useRef()
  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='form-input'
        type="text"
        placeholder='Add todo'
        autoFocus
        ref={inputRef}
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
      <button
        className='btn'
        type='submit'
        onClick={()=> inputRef.current.focus()}
      ><FaPlus/></button>
    </form>
  )
}

export default AddTodo