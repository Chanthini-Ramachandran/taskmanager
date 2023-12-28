import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

const List = ({ todo, handleCheck, handleDelete, handleEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    setEditing(true);
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit(todo.id, newText);
      setEditing(false);
    }
  };

  return (
    <li className='list' key={todo.id}>
      <input
        type='checkbox'
        checked={todo.checked}
        onChange={() => handleCheck(todo.id)}
      />
      {isEditing ? (
        <div className='edit-txt-container'>
          <input
          className='edit-txt'
            type='text'
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <>
          <label className='txt-label'>{todo.text}</label>
          <button className='edit' onClick={handleEditClick} role='button'>
            <CiEdit />
          </button>
        </>
      )}
      <button
        className='delete'
        role='button'
        onClick={() => handleDelete(todo.id)}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default List;
