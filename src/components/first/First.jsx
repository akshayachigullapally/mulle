import './First.css'


function First(){

    //state
    let a=10;
    let username='akshaya';
    let person={
        pid:100,
        age:20
    }
    let skills=['css','js','react','css']
    let students=[{sid:1,name:'bhanu'},{sid:2,name:'siddu'},{sid:3,name:'ravi'}]

    return(
        <div className="main">
            <h1 className='text-danger'>First component</h1>
            <h2>The value of a is {a}</h2>
            <h2>Name: {username}</h2>
            <h3>Person Id is: {person.pid}</h3>
            <h3>Person age is: {person.age}</h3>
            {
                skills.map((skill,index)=><h2 key={index}>{skill}</h2>)
            }
            {
                students.map((stuObj)=><div key={stuObj.sid}>
                    <h2>{stuObj.sid}</h2>
                    <h2>{stuObj.name}</h2>
                    </div>)
            }
    </div>) 
}

export default First;