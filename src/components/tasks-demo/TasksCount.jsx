import React from 'react'

function TasksCount(props) {
  return (
    <div>
      <div className='display-6 text-warning'>Tasks Count</div>
      <p className='lead'>{props.tasks.length}</p>
    </div>
    
  )
}

export default TasksCount;