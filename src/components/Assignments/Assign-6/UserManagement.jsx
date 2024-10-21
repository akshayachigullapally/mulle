import {useState} from 'react'
import AddUser from './AddUser'
import UserList from './UserList'
import Count from './Count'

function UserManagement() {
    let [users,setUsers]=useState([])
  return (
    <div className='bg-dark text-white p-5 mt-5'>
        <h1 className='text-center text-info fw-bold mb-5 '>User Management</h1>
        <div className=' d-flex justify-content-around '>
            <AddUser users={users} setUsers={setUsers}/>
            <UserList users={users}/>
            <Count users={users} />
        </div>
    </div>
    
  )
}

export default UserManagement;