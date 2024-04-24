import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({counter}) => {
  const {cart,cartQuantity} = useContext (CartContext)  
  console.log (cart)
    return(
        <>
        <FaShoppingCart color="white" fontSize={'1.5rem'}/>
        {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}''
        </>
    )
}

export default CartWidget