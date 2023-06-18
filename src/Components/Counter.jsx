import React from 'react'
import {useState} from 'react'

function Counter() {

    const [counter,setCounter] = useState(0);
  

    function increaseCounter(){
        setCounter(counter+1)
    }
    function decreaseCounter(){
        setCounter(counter-1)
    }

  return (
    <div>
        <h1 className='my-3'>{counter}</h1>
        <div >
           <button onClick={increaseCounter} className="btn btn-success mx-3">Increase Counter by 1</button>
       
           <button onClick={decreaseCounter} className="btn btn-danger">Decrease Counter by 1</button>
        </div>
    </div>
  )
}

export default Counter
