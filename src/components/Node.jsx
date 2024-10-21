import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/CounterContext'

  
function Node() {
  
  const {counter,setCounter}=useContext(counterContextObj)

  return (
    <div className='text-center '>
        <h1 className='fs-2 text-danger'>Node</h1>
        <button className="btn btn-warning" onClick={()=>setCounter(counter-1)}>Decrement</button>
        <h1>Counter : {counter}</h1>
        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis quaerat ullam saepe. Nemo beatae, ut sunt blanditiis provident accusantium eaque tempora et alias reiciendis a accusamus recusandae, culpa corporis quis eligendi aliquid non error cum maiores, perferendis repellendus. Corporis eius corrupti vel velit voluptate mollitia fuga aut quas et labore nostrum, magni nemo enim iste nihil qui recusandae rem consectetur voluptates dolores exercitationem. Voluptas labore magnam voluptatibus, consequuntur error illo corrupti ut voluptatum, alias accusantium cum soluta nemo aspernatur maiores cumque est adipisci architecto quaerat rem doloremque saepe. Repudiandae fugit blanditiis architecto illum voluptatum in unde id reiciendis consequatur.</p>
    </div>
  )
}

export default Node