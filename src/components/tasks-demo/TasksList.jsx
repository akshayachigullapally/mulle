import React from 'react'

function TasksList(props) {
  return (
    <div>
      <div className='display-6 text-warning'>List of Tasks</div>
      {
        props.tasks.map(t=><p className='lead' key={t}>{t}</p>)
      }
    </div>
    
  )
}

export default TasksList;