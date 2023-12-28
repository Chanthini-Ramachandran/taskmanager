import React from 'react'
import TodoList from './TodoList';

const Content = ({todos, handleCheck, handleDelete, handleEdit}) => {
    
  return ( 
    <form className='list-item'>
      {(todos.length) ? (
        <TodoList 
          todos = {todos}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
        />
        ) : (<p>Add Todo</p>)
      }
    </form>
  )
}

export default Content