import React from 'react'
//hook
import{useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../components/itemList/ItemList'

function ItemListContainer({greeting}) {
  const [products, setProducts] = useState ([])
  const [error, setError] = useState (false)
  const [loading, setLoading] = useState (false)

  useEffect(()=> {
    setLoading(true)
    getProducts ()
    .then ((res)=> setProducts(res))
    .catch ((error)=> setError(error))
    .finally(()=> setLoading(false))
  },[])

  if(loading){
    return <h1>Cargando...</h1>
  }

  if (error){
    return <h1>Se ha producido un error intente más tarde</h1>
  }

  return (
    <div>
      <h1 className='fst-italic text-danger'>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
