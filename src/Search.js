import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = ({search, setSearch}) => {
  return (
    <form 
        onSubmit={(e)=>e.preventDefault()}>
        <input 
            className='form-input'
            type="text" 
            placeholder='Search'
            role='searchbox'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button
            className='btn'
            type='submit'
            // onSubmit={setSearch('')}
        ><FaSearch/></button>
    </form>
  )
}

export default Search