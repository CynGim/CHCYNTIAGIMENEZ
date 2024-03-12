import {useEffect, useState} from 'react'
import { getOneProduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] =useState({})
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getOneProduct('8')
        .then((res)=> setProductDetail(res))
        .catch((error)=> console.log (error))
        .finally(()=> setLoading(false))
    },[])

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
