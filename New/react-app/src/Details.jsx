import React, { useState } from 'react'

const Details = () => {
  const[visible, setVisible] = useState(true)

  function showDetails(){
    
  }

  
  return (
    <div>
      <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, perferendis voluptas. Libero fugit nobis aliquam recusandae commodi id accusamus quam exercitationem, inventore voluptatem perspiciatis nam dolore. Officiis hic fugit non.</p>
      <button onClick={showDetails}>Show details</button>
     
    </div>
  )
}

export default Details
