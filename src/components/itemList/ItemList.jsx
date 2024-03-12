import React from "react";
import Item from '../item/Item';

const ItemList = ({products}) =>{
//creo map
    return (
        <div className="d-flex justify-content-between align-item-center flex-wrap ">
        {products.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
    )
}




export default ItemList