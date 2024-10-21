import C from './C'
function B(props){
    console.log(props); //{x:100,username:'ravi}
    return(
        <div>
            <h1>Component B</h1>
            <h2>Data from parent is {props.x}</h2>
            <h2>username:{props.username}</h2>
            <C />
        </div>
    )
}

export default B;