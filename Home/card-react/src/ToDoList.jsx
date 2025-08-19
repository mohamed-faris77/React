import React, { useState } from 'react'

const ToDoList = () => {
const[task, setTask] = useState();
// const[newTask, setNewTask] = useState([]);


const handleChange = (e) => {
    setTask(e.target.value);
}
  return (
    <div>
      <h2>To Do List App</h2>
      <input type="text" onChange={handleChange}/>

      <ol>
        <li></li>
      </ol>
    </div>
  )
}

export default ToDoList
