import React from 'react'
import "./style.css";

function Info(props) {
  return (
    <div className='Info'> 
        <h3>{props.name}</h3>
        <p>{props.bio}</p>
    </div>
  )
}

export default Info

