import React from 'react'

function UserList({users}) {

  return (
    <div>
        <h3 className='text-center fw-bold mb-3'>User List</h3>
        <table className="table table-striped table-bordered">
            <thead className="table-dark">
            <tr>
                <th>Username</th>
                <th>Email</th>
                
            </tr>
            </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">No users registered yet.</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserList