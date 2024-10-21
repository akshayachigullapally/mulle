import React from 'react'
import {useForm}from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Register() {

    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate();

    function handleFormSubmit(newUser){
        console.log(newUser)
        //Make HTTP POST req to save newUser in API
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newUser),
        })
        .then((res)=>{
            if(res.status === 201){
                //navigate top login component programatically
                navigate("/login");
            }
        })
        .catch(err=>console.log("err is ",err))
    }
  return (
    <div className='bg-dark text-white container p-5 mt-5'>
      <h1 className='display-3 text-center text-info'> User Registration</h1>
      {/* form */}
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* username */}
        <div className='mb-3'>
            <label className='form-label' htmlFor='username'>Username</label>
            <input type='text' {...register('username', { required: true,minLength:4,maxLength:8 })} id='username' className='form-control'/>
            {errors.username?.type==='required'&& <span className='text-danger'>Username is required</span>}
            {errors.username?.type==='minLength' && <p className='text-danger'>Min length should be 4</p>}
            {errors.username?.type==='maxLength' && <p className='text-danger'>Max length should be 8</p>}
        </div>
        {/* password */}
        <div className='mb-3'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input type='password' {...register('password', { required: true })} id='password' className='form-control'/>
            {errors.password && <span className='text-danger'>password is required</span>}
        </div>
        {/* email */}
        <div className='mb-3'>
            <label className='form-label' htmlFor='email'>Email</label>
            <input type='email' {...register('email', { required: true })} id='ememail' className='form-control'/>
            {errors.email && <span className='text-danger'>email is required</span>}
        </div>
        {/* date of birth */}
        <div className='mb-3'>
            <label className='form-label' htmlFor='db'>Date of Birth</label>
            <input type='date' {...register('dob', { required: true })} id='db' className='form-control'/>
            {errors.dob && <span className='text-danger'>DOB is required</span>}
        </div>
        {/* submit */}
        <button className="btn btn-info mx-auto d-block mt-4 " type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register