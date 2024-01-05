import { useState } from 'react';
import './App.css';
import {Task} from './task'

function App() {
  const [todoList,setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName : newTask,
      completed : false,
    }
    setToDoList([...todoList,task]);
  }

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task)=> task.id!==id))
  }

  const completeTask = (id) => {
    setToDoList(
      todoList.map((task)=>{
      if(task.id === id){
        return { ...task, completed:true}
      } else {
        return task;
      }
    })
    );
  }

  return(  
    <div className='App'>
      <div className='addTask'>
        <input placeholder="Enter your task here" onChange={handleChange}/>
        <button class="button-17" role="button" onClick={addTask}>ADD TASK</button>
      </div>
      <div className='listContainer'>
        <div className='list'>
          {todoList.map((task)=>{
            return (
              <Task 
              taskName = {task.taskName} 
              id = {task.id} 
              deleteTask={deleteTask} 
              completeTask={completeTask}
              completed={task.completed}
            />
            )
          })}
        </div>
      </div>
    </div>
    );
}



export default App;
