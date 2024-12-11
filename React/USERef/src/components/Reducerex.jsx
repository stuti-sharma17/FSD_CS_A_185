import React, { useReducer } from "react";

const Reducerex=()=>{
    const initialvalue=0;
    const[state , dispatch] =useReducer(reducer , initialvalue);
    
    const reducer=(state,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return state+1;
            case 'DECREMENT':
                return state-1;
            case 'RESET':
                return initialvalue;
            default:
                throw new Error("Unexpected action");
        }
    }
    return(
        <div>
            <h1>Counter: {state}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}
export default Reducerex