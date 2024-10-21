import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List';
function Add({users,addUser}) {
  const { register, handleSubmit, formState: { errors } } = useForm();


  function onSubmit (data){
    addUser(data);
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          {...register('username', { required: true, minLength: 4, maxLength: 8 })}
        />
        {errors.username && errors.username.type === 'required' && (
          <p className="text-danger">* Username is required</p>
        )}
        {errors.username && errors.username.type === 'minLength' && (
          <p className="text-danger">* Minimum length is 4 characters</p>
        )}
        {errors.username && errors.username.type === 'maxLength' && (
          <p className="text-danger">* Maximum length is 8 characters</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth</label>
        <input
          type="date"
          id="dob"
          className="form-control"
          {...register('dob', { required: true })}
        />
        {errors.dob && (
          <p className="text-danger">* Date of Birth is required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input
          type="text"
          id="city"
          className="form-control"
          {...register('city', { required: true })}
        />
        {errors.city && (
          <p className="text-danger">* City is required</p>
        )}
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary px-5">Add User</button>
      </div>
    </form>
     <List users={users} />
     </div>
  );
}

export default Add;