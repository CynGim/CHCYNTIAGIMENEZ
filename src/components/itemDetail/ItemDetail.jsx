import React from 'react'
import ItemCount from '../itemCount/itemCount'
const ItemDetail = ({productDetail}) => {
  return (
    <div>
        <h3>{productDetail.name}</h3>
        <img src={productDetail.imagen} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p className='price'>€{productDetail.price}</p>
        <ItemCount stock={productDetail.stock}/>
    </div>
  )
}

export default ItemDetail
