import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { loginContextObj } from '../contexts/LoginContext'

function Header() {

  const {userLoginStatus,userLogOut}=useContext(loginContextObj)
  
  return (
    <div className='bg-dark text-white py-2 text-dark'>
    <ul className="nav justify-content-end fs-4">
      <li className="nav-item">
        <Link className="nav-link "  to="">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link "  to="register">Register</Link>
      </li>


      {userLoginStatus===false ?
        (
          <li className="nav-item">
          <Link className="nav-link "  to="login">Login</Link>
          </li>
        ):
        (
          <li className="nav-item">
          <Link className="nav-link "  to="login" onClick={userLogOut}>LoginOut</Link>
          </li>
        )
      }


      <li className="nav-item">
        <Link className="nav-link "  to="technologies">Technologies</Link>
      </li>
    
      </ul>
    </div>
  )
}

export default Header