import React from 'react'
import List from './List';

const TodoList = ({todos, handleCheck, handleDelete, handleEdit}) => {
  return (
    <ul className='list-container'> 
            {todos.map((todo)=>(
              <List
                key = {todo.id} 
                todo = {todo} 
                handleCheck = {handleCheck} 
                handleDelete = {handleDelete}
                handleEdit = {handleEdit}
              />
            ))}
        </ul>
  )
}

export default TodoList