import { useReducer } from "react";

function valueReducer(state,action){
  if( action === 'increment'){
    return state + 1;
  }
  else{
    return state -1;
  }
}

const Counter = () => {
  const[Counter, dispatch] = useReducer(valueReducer,0);
  return (
    <div>
     <h2>Count: {Counter}</h2>
     <button onClick={()=>dispatch('increment')}>Increment</button>
     <button onClick={()=> dispatch('decrement')}>Decrement</button> 
    </div>
  )
}

export default Counter
