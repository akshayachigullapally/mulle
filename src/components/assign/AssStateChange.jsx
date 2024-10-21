import {useState} from "react";

function AssStateChange(){
    //counter state
    let [counter,setCounter]=useState(0);
    //handle function
    function handleCounterIncrement(){
        setCounter(counter+1);
    }
    function handleCounterDecrement(){
        setCounter(counter-1);
    }
    function handleCounterReset(){
        setCounter(0);
    }
    return(
        <div className="text-center">
            <h1 className=" mt-5 text-secondary mb-5">Counter: {counter}</h1>
            <button className="btn btn-danger me-5" onClick={handleCounterIncrement}>Increment</button>
            <button className="btn btn-success me-5" onClick={handleCounterDecrement}>Decrement</button>
            <button className="btn btn-primary me-5" onClick={handleCounterReset}>Reset</button>
        </div>
    )

}
export default AssStateChange;