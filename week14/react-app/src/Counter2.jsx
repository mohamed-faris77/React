import React, { useReducer } from 'react'

function counterReducer(state, action){
  switch(action.type){
    case'increment':
      return{count: state.count +1};
    case'decrement':
      return{count: state.count -1};
    case'reset':
      return{count:0};
    default:
      return state;  
  }
}


const Counter2 = () => {
  const[state,dispatch] = useReducer(counterReducer,{ count: 0});
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter2
