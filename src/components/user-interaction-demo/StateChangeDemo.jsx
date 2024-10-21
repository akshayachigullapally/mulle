import {useState} from 'react';

function StateChangeDemo(){
    //state
    //let a=10;
    let [a,setA]=useState(10);
    let [username,setUsername]=useState("Akshaya");
    let [person,setPerson]=useState({pid:100,name:'rajesh',city:'hyd'});
    let [skills,setSkills]=useState(['css','js']);
    
    //handle function
    function handleIncrement(){
        setA(a+1);
    }
    function handleDecrement(){
        setA(a-1);
    }
    function handleChangeUsername(){
        setUsername("Akshaya Chigullapally");
    }
    function handlePerson(){
        //setPerson({pid:200,name:'Bhanu',city:'pune'});
        setPerson({...person,pid:200,name:'kiran'})
    }
    function handleAddSkill(){
        setSkills([...skills,"Angular"])
    }
    function handleDeleteSkill(){
        let copySkills=[...skills];
        copySkills.pop();
        // copyskills.shift();   Delete first element
        setSkills(copySkills);
    }

    return(

        <div className="text-center">
            <h1 className="text-danger mt-5">State change Demo</h1>
            <h3>Value of a is {a}</h3>
            <button className="btn btn-primary me-3" onClick={handleIncrement}>Change state(+)</button>
            <button className="btn btn-primary" onClick={handleDecrement}>Change state(-)</button>
            <h2 className='mt-3'>{username}</h2>
            <button className="btn btn-secondary" onClick={handleChangeUsername}>Change username</button>
            {/* person data */}
            <h3 className='mt-5'>{person.pid}</h3>
            <h3>{person.name}</h3>
            <h3>{person.city}</h3>
            <button className='btn btn-warning mb-3' onClick={handlePerson}>Change person data</button>

            {/* skills state */}
            {
                skills.map(skill=><h1 key={skill} className='text-primary '>{skill}</h1>)
            }
            <button className='btn btn-success' onClick={handleAddSkill}>Add new skill</button>
            <button className='btn btn-primary ms-3' onClick={handleDeleteSkill}>Delete skill</button>
        </div>
    )
}
export default StateChangeDemo;