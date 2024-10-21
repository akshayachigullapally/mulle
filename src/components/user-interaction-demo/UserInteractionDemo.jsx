function UserInteractionDemo(){


    //event handling function
    function handClick(){
        console.log("Button clicked");
    }
    function handleAnotherEvent(x){
        console.log("Another event occured and x is",x);
    }

    return(
        <div className="text-center">
             <h2 className="display-3">User Interaction Demo Component</h2>
             <button className="btn btn-success" onClick={handClick}>Click</button>
             <button className="btn btn-danger" onClick={()=>handleAnotherEvent(120)}>Another click</button>
        </div>
    )
}
export default UserInteractionDemo;