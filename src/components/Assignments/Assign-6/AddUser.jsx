import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function AddUser({ users, setUsers }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function addNewUser(userObj) {
    const userExists = users.some(user => user.username === userObj.username);

    if (userExists) {
      alert("Duplicate username");
    } else {
      setUsers([...users, userObj]);  
      reset(); 
    }
  }

  useEffect(() => {
    console.log('Updated users:', users);
  }, [users]);  
  
  return (
    <div className='text-center'>
      <h3 className='text-center fw-bold'>Add user</h3>
      <form className="mt-4" onSubmit={handleSubmit(addNewUser)}>
        <label htmlFor="username" className="form-label mb-2">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          {...register('username', { required: true, minLength: 4, maxLength: 8 })} />
        {errors.username?.type === 'required' && <p className="text-danger">Please enter Username</p>}

        <label htmlFor='email' className='form-label'>Email</label>
        <input type='email' className='form-control' id='email' {...register('email', { required: true })} />
        {errors.email && <p className="text-danger">Please enter a valid email</p>}

        <button className="btn btn-info mt-4" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddUser;
