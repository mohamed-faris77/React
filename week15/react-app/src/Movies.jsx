import React from 'react'

const movie =   [{id:1, name:'Inception'},
                 {id:2, name:'Interstellar'},
                 {id:3, name:'Dune'},
                 {id:4, name:'500 days of summer'}]


const Movies = () => {

  const listItem = movie.map(list => <h4 key={list.id}>{list.name} <button>❌</button></h4>)

  return (
    <div>
      <h2>Movies</h2>
      <input type="text" placeholder='Enter movie name '/> <button>Add</button>
      <p>{listItem}</p>
    </div>
  )
}

export default Movies
