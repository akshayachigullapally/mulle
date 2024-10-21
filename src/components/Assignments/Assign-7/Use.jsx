import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
function Use() {
  const [users, setUsers] = useState([]);

  const addUser= (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container  mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-6 p-5 border rounded shadow bg-dark text-white ">
          <h2 className="mb-4 text-info">User Registration</h2>
          <Add users={users} addUser={addUser} />
        </div>
      </div>
    </div>
  );
}

export default Use;