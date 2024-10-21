import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext ,useState} from 'react'
import { loginContextObj } from '../contexts/LoginContext'
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useForm } from 'react-hook-form';

function UserProfile() {
   
  
  const {currentUser,setCurrentUser}=useContext(loginContextObj)
  const [userEditStatus,setUserEditStatus]=useState(false)
  const {register,handleSubmit,setValue}=useForm()

  function onUserProfileEdit(){
    setUserEditStatus(true)
    //display the existing user info in the form
    setValue('username',currentUser.username)
    setValue('email',currentUser.email)
    setValue('dob',currentUser.dob)
  }

  function onModifiedUsersave(modifiedUser){
    console.log(modifiedUser)
    fetch(`http://localhost:3000/users/${currentUser.id}`,{
      headers:{"Content-Type":"application/json"},
      method:"PATCH",
      body:JSON.stringify(modifiedUser)
    })
    .then(res=>res.json())
    .then((editedUser)=>{
      setCurrentUser(editedUser)
      setUserEditStatus(false)
    })
    .catch(err=>console.log("err is",err))
  }

  return (
    <div className='text-center'>
       <h1 className='mt-5'>User Profile  </h1>

      {
        userEditStatus===false?(
        <div className='bg-dark rounded p-4 text-info fs-3 mt-4'>
          <p className='lead'>{currentUser.username}</p>
          <p className='lead'>{currentUser.email}</p>
          <p className='lead'>{currentUser.dob}</p>
          <button className="btn btn-warning" onClick={onUserProfileEdit}><FaEdit className='me-3' />Edit Profile</button>
        </div>):(
        <form className='w-50 mx-auto mt-3 bg-dark text-white p-5' onSubmit={handleSubmit(onModifiedUsersave)}>
          <input type="text"  {...register('username')} id='' className=" form-control mb-3" disabled />
          <input type="email"  {...register('email')} id='' className=" form-control mb-3" />
          <input type="date"  {...register('dob')} id='' className=" form-control mb-3" />
          <button className="btn btn-success"><FaSave className='me-3'/>Save</button>
        </form>
        )
      }
       
    </div>
  )
}

export default UserProfile