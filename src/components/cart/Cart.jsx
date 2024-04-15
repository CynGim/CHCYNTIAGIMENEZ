import React, { useContext } from 'react'
import CartView from '../cartView/CartView'

const Cart = () => {
    const {cart} = (useContext)
    return(
    <div>
        {cart.length > 0 ? <CartView/> : <div><h1>No hay producto en tu carrito</h1> <Link className='btn btn-success'> Ir a comprar</Link> </div>}
    </div>
    )
}

export default Cart