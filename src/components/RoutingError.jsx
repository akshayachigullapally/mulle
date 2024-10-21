import React from 'react'
import { useRouteError } from 'react-router-dom'

function RoutingError() {
    const routeErr=useRouteError();
    console.log(routeErr)

  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{minHeight:"100vh"}}>
        <p className='lead display-5' >{routeErr.data}</p>
        <p className='lead display-4 text-warning'>{routeErr.status}-{routeErr.statusText}</p>

    </div>
  )
}

export default RoutingError