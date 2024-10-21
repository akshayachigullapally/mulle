import React from 'react';

function List({users}) {
  return (
    <div className="mt-5">
      <h3>Registered Users</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Username</th>
            <th>Date of Birth</th>
            <th>City</th>
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
                <td>{user.dob}</td>
                <td>{user.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;