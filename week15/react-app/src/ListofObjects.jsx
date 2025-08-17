import React from 'react'

const ListofObjects = () => {
  const students =[{id:1, name:'Faris'},
                   {id:2, name:'Fasalu'},
                   {id:3, name:'Yadhu'}]

    const ListItems = students.map(student => <li key={student.id}>{student.name}</li>)
  return (
    <div>
      <ol>{ListItems}</ol>
    </div>
  )
}

export default ListofObjects

