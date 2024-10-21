
import {useEffect,useState} from 'react';


function EffectDemo() {

  let [counter1,setCounter1]=useState(100);
  let [counter2,setCounter2]=useState(200);

  //use effect executes only after initial rendering of a component
  //it will executes everytime when state is changed
  //if second argument is an empty array then effect function executes only once
  
  useEffect(()=>{
    //effect
    console.log("use Effect executed");
  },[counter1]);

  function handlleCounterChange1(){
    setCounter1(counter1+1);
  }
  function handlleCounterChange2(){
    setCounter2(counter2+1);
  }
  return (
    <div className='container text-center'>
      <h1 className="text-dark display-1">Side Effects Demo</h1>
      <h2>Counter1 : {counter1}</h2>
      <h2>Counter2 : {counter2}</h2>
      <button className='btn btn-warning mb-3' onClick={handlleCounterChange1}>Change counter state1</button>
      <button className='btn btn-danger' onClick={handlleCounterChange2}>Change counter state2</button>
    </div>
  )
}

export default EffectDemo;