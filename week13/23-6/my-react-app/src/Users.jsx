import React, { useEffect, useState } from 'react'

const Users = () => {
  const[users, setUsers] = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
},[])

  return (
    <ul>
      {users.map(user=>(<li key={user.id}>{user.name}</li>))}
    </ul>
  )
}

export default Users
