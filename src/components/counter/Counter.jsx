import React, { useState } from 'react'
import { Button } from './Button';

export const Counter = ({initialValue=0, increment=1, decrement=1}) => {
    console.log("Renderizando counter");

    const [counter,setcounter] = useState(initialValue);
    

    const handleIncrement = () =>{
        setcounter(counter+increment);
        console.log(counter);
    }

    const handleDecrement = () => {
        setcounter(counter-decrement);
        console.log(counter);
    }

    const reset = () =>{
        setcounter(initialValue)
    }
   return (
    <>
     <h1>Counter</h1>
     <h2>{counter}</h2>
     <Button onClick={handleIncrement} >+</Button>
     <Button onClick={handleDecrement}>-</Button>
     <Button onClick={reset}>Reset</Button>
    </>
  )
}


/* Hacer un componente para el botón
atributo: increment={5}
atributo: increment={-5}
atributo: onClick={fncCallback}
*/
