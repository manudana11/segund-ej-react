 import React, { useState } from 'react'
 
 const Counter = ({initialState, num = 1}) => {
    const [counter, setCounter] = useState(initialState);
    const increment = () => {
        setCounter(counter + num);
    }
    const decrease = () => {
        setCounter(counter - num);
    }
   return (
     <div>
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
     </div>
   )
 }
 
 export default Counter