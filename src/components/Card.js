import React from 'react'
import "./Card.css"

function Card({item,handleClick}) {
    
    
    

  return (
    <div className='card'>
        <h2 className='title'>Title:{item.title}</h2>
        <img src={item.image} alt="/" className="pic" />
        <p className='price'>Price:${item.price}</p>
        <button onClick={()=>handleClick(item)}>BUY</button>
    </div>
  )
}

export default Card