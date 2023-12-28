import React from 'react'
import { FaSearch } from "react-icons/fa";
// import {useRef} from 'react'

const Search = ({search, setSearch}) => {
  // const ref = useRef(null);

  const handleClick = () => {
    // inputRef.current.focus();
    setSearch('');
    document.getElementById("add-listitem").focus();
    
  };
  return (
    <form className='flex'
        onSubmit={(e)=>e.preventDefault()}>
        <input 
            className='form-input'
            type="text" 
            placeholder='Search'
            role='searchbox'
            value={search}
            // ref={ref}
            onBlur={(e)=>{setSearch(e.target.value='')}}
            onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button
            className='btn'
            type='submit'
            onClick={handleClick}
            // onSubmit={setSearch('')}
        ><FaSearch/></button>
    </form>
  )
}

export default Search