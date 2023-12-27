// import { useState } from 'react';
// import './App.css';
// import Content from './Content';
// import Footer from './Footer';
// import Header from './Header';
// import AddTodo from './AddTodo';
// import Search from './Search';

// function App() {
//   const [todos, setTodo] = useState(JSON.parse(localStorage.getItem("todoApp")))
// const [input, setInput]=useState('')
// const [search, setSearch]=useState('')

// const addInput = (newText) =>{
//   const addNewText = {id:crypto.randomUUID(), checked:false, text: newText}
//   const addTodo = [...todos, addNewText ]
//   setTodo(addTodo)
//   localStorage.setItem("todoApp", JSON.stringify(addTodo))
// }
// const handleCheck = (id)=>{
//   const updatedCheck = todos.map((cList)=>(
//     cList.id===id ? {...cList, checked:!cList.checked} : cList))
//     setTodo(updatedCheck)
//     localStorage.setItem("todoApp", JSON.stringify(updatedCheck))
// }
// const handleDelete = (id)=>{
//   const updatedDelete = todos.filter((dList)=>dList.id!==id ) 
//   setTodo(updatedDelete)
//   localStorage.setItem("todoApp", JSON.stringify(updatedDelete))
// }
// const handleSubmit = (e)=>{
//   e.preventDefault()
//   if (!input) return;
//   addInput(input)
//   setInput('')
// }
//   return (
//     <>
//       <Header/>
//       <AddTodo
//         input = {input}
//         setInput = {setInput}
//         handleSubmit = {handleSubmit}
//       />
//       <Search
//         search = {search}
//         setSearch = {setSearch}
//       />
//       <Content 
//         todos = {todos.filter(item => ((item.text).toLowerCase()).includes(search))}
//         handleCheck = {handleCheck}
//         handleDelete = {handleDelete}
        
//       />
//       <Footer length = {todos.length}/>
//     </>
//   );
// }

// export default App;

// import React from 'react'

// const Header = () => {
//   return (
//     <h1>Todo List</h1>
//   )
// }

// export default Header

// import React from 'react'
// import { FaPlus } from "react-icons/fa";

// const AddTodo = ({input, setInput, handleSubmit}) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text"
//         placeholder='Add todo'
//         autoFocus
//         onChange={(e)=>setInput(e.target.value)}
//         value={input}
//       />
//       <button
//         type='submit'
//       ><FaPlus/></button>
//     </form>
//   )
// }

// export default AddTodo

// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const Search = ({search, setSearch}) => {
//   return (
//     <form 
//         onSubmit={(e)=>e.preventDefault()}>
//         <input 
//             type="text" 
//             placeholder='Search'
//             role='searchbox'
//             value={search}
//             onChange={(e)=>{setSearch(e.target.value)}}
//         />
//         <button
//             type='submit'
//         ><FaSearch/></button>
//     </form>
//   )
// }

// export default Search

// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// import TodoList from './TodoList';

// const Content = ({todos, handleCheck, handleDelete}) => {
    
//   return ( 
//     <form>
//       {(todos.length) ? (
//         <TodoList 
//           todos = {todos}
//           handleCheck = {handleCheck}
//           handleDelete = {handleDelete}
//         />
//         ) : (<p>Add Todo</p>)
//       }
//     </form>
//   )
// }

// export default Content

// import React from 'react'
// import List from './List';

// const TodoList = ({todos, handleCheck, handleDelete }) => {
//   return (
//     <ul> 
//             {todos.map((todo)=>(
//               <List
//                 key={todo.id} 
//                 todo={todo} 
//                 handleCheck={handleCheck} 
//                 handleDelete={handleDelete}
//               />
//             ))}
//         </ul>
//   )
// }

// export default TodoList

// import React from 'react'
// import { MdDelete } from "react-icons/md";

// const List = ({todo, handleCheck, handleDelete}) => {
//   return (
//     <li key={todo.id}>
//                 <input 
//                   type="checkbox" 
//                   checked={todo.checked}
//                   onChange={()=>handleCheck(todo.id)}
//                 />
//                 <label>{todo.text}</label>
//                 <button 
//                   role='button'
//                   onClick={()=>handleDelete(todo.id)}
//                 ><MdDelete /></button>
//               </li>
//   )
// }

// export default List

// import React from 'react';

// const Footer = ({ length }) => {
//   return (
//     <footer>
//       Number of Lists: {length}
//     </footer>
//   );
// };

// export default Footer;
