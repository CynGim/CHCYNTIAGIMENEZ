import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div>
      <div className='card' style={{width:'20rem'}}>
        <p className='card-text'>{prod.name}</p>
        <img src= {prod.imagen} alt={prod.name} className='card-img-top'/>
        <p className='detail'>{prod.description}</p>
        <p className='price'>€{prod.price}</p>
      </div>
      <Link className='btn btn-primary'to={`/item/${prod.id}`}>Más detalle</Link>
    </div>
  )
}

export default Item
