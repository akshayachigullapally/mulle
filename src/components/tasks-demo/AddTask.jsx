import {useState} from 'react'

function AddTask(props) {


  //state
  // let [tasks,setTasks]=useState([]);

  // function addNewTask(){
  //   let newNumber=Math.random();
  //   setTasks([...tasks,newNumber])
  // }

  
  // console.log(tasks)


  return (
    <div>
      <div className='display-6 text-warning'>Add new Task</div>
      <button className="btn btn-info my-3" onClick={props.addNewTask}>Add New</button>


    </div>
    
  )
}

export default AddTask;