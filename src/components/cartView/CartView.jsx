import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartView = () => {
    const {cart, clear, cartTotal, removeItem}= useContext (CartContext)
    return(
    <div>
        {
            cart.map((item)=>{
                return
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>€{item.price}</p>
                    <p>{item.quantity}</p>
                    <p>€{item.price * item.quantity}</p>
                    <button onClick={()=> removeItem (item.id)}>X</button>

                </div>
            })
        }
    </div>
    )
}

export default CartView