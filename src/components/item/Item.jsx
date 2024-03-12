import React from 'react'

const Item = ({prod}) => {
  return (
      <div className='card'style={{width:'20rem'}}>
      <div className='tittle'>
      <p className='text'>{prod.name}</p>
        </div>
      <img src={prod.imagen} alt={prod.name} className='card-img-top'/>
        <div className='card-body'>
            <p className='card-text'>{prod.description}</p>
        </div>
        <div className='card-price'>
            <p className='card-price'>€{prod.price}</p>
        </div>

        <button className='btn btn-dark'>Agregar al carrito</button>
    </div>
  )
}

export default Item
