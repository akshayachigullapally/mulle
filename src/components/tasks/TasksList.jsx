import React from 'react'

function TasksList(props) { //{tasks: []}
  return (
    <div>
        <h2>TasksList</h2>
        {
            props.tasks.map((tasks,index)=><p className='fs-2' key={index}>{tasks}</p>)
        }
    </div>
  )
}

export default TasksList
