import {useState} from 'react'
import Test2 from './Test2';
function Test1() {
    let [counter,setCounter]=useState(100);

    function handleCounterIncrement(){
        setCounter(counter+1);
    }
    function handleCounterDecrement(){
      setCounter(counter-1);
  }
  return (
    <div className='bg-info p-5 text-center'>

    <h1 className='display-1' >Parent
        </h1>
        <h1 className='text-center'>Counter : {counter}</h1>
        {/* <button className='btn btn-primary' onClick={handleCounterIncrement}>+</button> */}

        <Test2 counter={counter}  handleCounterIncrement={handleCounterIncrement} handleCounterDecrement={handleCounterDecrement}/>
    </div>
    
  )
}

export default Test1