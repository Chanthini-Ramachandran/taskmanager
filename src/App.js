import { useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddTodo from './AddTodo';
import Search from './Search';

function App() {
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem("todoApp")) || [])
const [input, setInput]=useState('')
const [search, setSearch]=useState('')

const addInput = (newText) =>{
  const addNewText = {id:crypto.randomUUID(), checked:false, text: newText}
  const addTodo = [...todos, addNewText ]
  setTodo(addTodo)
  localStorage.setItem("todoApp", JSON.stringify(addTodo))
}
const handleCheck = (id)=>{
  const updatedCheck = todos.map((cList)=>(
    cList.id===id ? {...cList, checked:!cList.checked} : cList))
    setTodo(updatedCheck)
    localStorage.setItem("todoApp", JSON.stringify(updatedCheck))
}
const handleDelete = (id)=>{
  const updatedDelete = todos.filter((dList)=>dList.id!==id ) 
  setTodo(updatedDelete)
  localStorage.setItem("todoApp", JSON.stringify(updatedDelete))
}
const handleEdit = (id, newText) => {
  const updatedEdit = todos.map((eList) =>
    eList.id === id ? { ...eList, text: newText } : eList
  );
  setTodo(updatedEdit);
  localStorage.setItem("todoApp", JSON.stringify(updatedEdit));
};

const handleSubmit = (e)=>{
  e.preventDefault()
  if (!input) return;
  addInput(input)
  setInput('')
}
  return (
    <div className='container'>
      <Header className='header'/>
      <div className="inputs">
        <AddTodo
          autofocus
          input = {input}
          setInput = {setInput}
          handleSubmit = {handleSubmit}
        />
        <Search
          search = {search}
          setSearch = {setSearch}
        />
      </div>
      <Content 
        todos = {todos.filter(item => item.text && item.text.toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
      />
      <Footer className='footer' length = {todos.length}/>
    </div>
  );
}

export default App;
