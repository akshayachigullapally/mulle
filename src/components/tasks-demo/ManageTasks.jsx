import {useState} from 'react'
import AddTask from './AddTask';
import TasksCount from './TasksCount';
import TasksList from './TasksList';

function ManageTasks() {

  //state lifted up
  let [tasks,setTasks]=useState([]);

  function addNewTask(){
    let newNumber=Math.random();
    setTasks([...tasks,newNumber])
  }
  return (
    <div>


    <div className='display-2'>Tasks Management System</div>
    {/*nest MdAddTask,taskslist and taskscount components */}
    <div className='d-flex justify-content-around mt-5'>
    <AddTask addNewTask={addNewTask}/>
    <TasksList tasks={tasks}/>
    <TasksCount tasks={tasks} />
    </div>

    </div>
  )
}

export default ManageTasks;