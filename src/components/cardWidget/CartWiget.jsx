import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({counter}) => {
    
    return(
        <>
        <FaShoppingCart color="white" fontSize={'1.5rem'}/>
        <Badge bg="danger">{counter}</Badge>
        </>
    )
}

export default CartWidget