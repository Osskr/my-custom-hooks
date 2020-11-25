import  { useState } from 'react';   

export const useCounter = (initialState = 10) => {
   
    const [state, setState] = useState(initialState)

    const increment = () =>{
        setState(state + 1  )
    }

    const decrement = () => {

        setState(state - 1)
    }

    const reset = (inicial=initialState) =>{

        setState(inicial)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}



//el custom hook no deja de ser una simple funncion 