import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react"
import AddTasksForm from "../components/AddTasksForm"
import TaskList from "../components/TaskList"

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading]=useState(false)
  // const [add, setAdd]=useState(false)

  // function displayAddForm() {

  //   setAdd((curr)=>!curr)
    
  // }

 
  console.log(tasks)

  return (
    <div >
      {/* <nav className="flex ">
        <button onClick={()=>displayAddForm()} >Tasks</button>
        <button>Add Tasks</button>        
      </nav> */}
      {/* <div className="page"> */}
        <AddTasksForm addTask={setNewTask} />
        {loading && <p>Loading Tasks...</p>}
      {!loading &&<TaskList  setLoading={setLoading} />}
      {/* </div> */}
    </div>
  )
}

export default Tasks