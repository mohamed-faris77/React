import React from 'react'

const UserGreeting = (props) => {

//   if(props.isLoggedIn){
//   return (
//     <div>
//       <h2>Hello {props.name}</h2>     
//     </div>
//   )
// }
// else{
//   return(
//     <h2>Please Login</h2>
//   )
// }

return(props.isLoggedIn ? <h2> Hello {props.name}</h2>  : <h2>Login</h2>)

}

export default UserGreeting