import React from 'react'

function Count(props) {
  return (
    <div>
        <h3 className='text-center fw-bold'>Count </h3>
        <p className="fs-4">No.of Users : {props.users.length}</p>
    </div>
  )
}

export default Count