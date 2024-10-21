import {useState} from 'react'

function Test2(props) {   //{counter : 100 ,setCounter : F}
    let [username,SetUsername]=useState('masterscoding');

    function handleUsername(){
        SetUsername('full-stack-mastery')
    }
  return (
    <div className='mt-4'>


    {/* <div className='display-2'>Child</div>
    <h1>Username : {username}</h1> */}
    {/* <p className='lead display-4'>Data received from Parent {props.counter}</p> */}



    <div className='d-flex  justify-content-center'>
    <button className='btn btn-success m-3 p-2 ' onClick={props.handleCounterIncrement}>Increment</button>
    <button className='btn btn-danger m-3 p-2' onClick={props.handleCounterDecrement}>Decrement</button>
    </div>
    <div className='display-3'>Child</div>
    {/* <button className='btn btn-danger' onClick={handleUsername}>Change Username</button>  */}
    </div>
  )
}

export default Test2;