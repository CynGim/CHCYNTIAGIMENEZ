import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/itemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({productDetail,}) => {
  const[purchase, setPurchase]= useState(false)
  const contexto = useContext(CartContext)
  const onAdd = (cantidad) =>{
    console.log('Su compra ha sido realizada', cantidad)
    setPurchase(true)
  }
  return (
    <div>
        <h3>{productDetail.name}</h3>
        <img src={productDetail.imagen} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p className='price'>€{productDetail.price}</p>
        {purchase ? <Link className='btn btn-success' to='cart'>Ir al carrito </Link>
        : <ItemCount stock={productDetail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail

