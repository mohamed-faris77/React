import React from 'react'

const Login = (props) => {
  
  if(props.user){
    return(
    <h2>Welcome</h2>);
  }
  else{
    return(
    <h2>Take Membership</h2>);
  }
  
  
  //return (
    
  //   <div>
  //     <h2>Mohamed {props.name} Age : {props.age} Student : {props.user ? "Yes" : "No"}</h2>
  //   </div>
  // )
}

export default Login
