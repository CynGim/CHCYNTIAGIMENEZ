import {useEffect, useState} from 'react'
import { getOneProduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] =useState({})
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    useEffect(()=>{
        setLoading(true)
        getOneProduct(itemId)
        .then((res)=> setProductDetail(res))
        .catch((error)=> console.log (error))
        .finally(()=> setLoading(false))
    },[itemId])

    if(loading){
        return<h1>Cargando Productos</h1>
    }

  return (
    <div>
      <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer
