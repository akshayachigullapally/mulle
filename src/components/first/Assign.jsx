function Assign(){
    // array of employee objects 
    let employee=[
        { id: 1, name: 'Ravi', position: 'Software Engineer', department: 'IT' },
        { id: 2, name: 'Raju', position: 'Project Manager', department: 'Operations' },
        { id: 3, name: 'Rama', position: 'UX Designer', department: 'Design' }
    ]
    return (
        <div>
          <h2>Employee List</h2>
          {/* <h2>{empObj.id}  -{empObj.name}  -{empObj.position}  -{empObj.department}</h2> */}
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((empObj) => (
                <tr key={empObj.id}>
                  <td>{empObj.id}</td>
                  <td>{empObj.name}</td>
                  <td>{empObj.position}</td>
                  <td>{empObj.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
}

export default Assign;
