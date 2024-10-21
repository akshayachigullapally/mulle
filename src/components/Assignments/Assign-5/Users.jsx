function Users(props) {
  let users = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
    },
    {
      id: 4,
      title: "Mens Cotton Jacket",
      price: 55.99,
    },
  ];

  return (
    <div className="container bg-dark text-white">
      <h1 className="text-info text-center  mt-5 mb-5">Counter: {props.counter}</h1>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
        {users.map(user => (
          <div className="col mb-5" key={user.id}>
            <div className="card text-center h-100 bg-light p-3">
              <div className="card-body">
                <p className="fs-4">Product ID: {user.id}</p>
                <p className="lead">Product Title: {user.title}</p>
                <p className="fs-5">Product Price: ${user.price}</p>
                <button className="btn btn-info" onClick={props.handleIncrement}>Add Count</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
