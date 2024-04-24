import React, {useEffect, useState} from 'react'
import { getOneProduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {collection, doc, getDoc} from '@firebase/firestore'
import {db} from '../../service/firebase'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] =useState({})
    const [loading, setLoading] = useState(false)
    const [validateItem, setValidateItem] = useState (false)
    const {itemId} = useParams()
    console.log(itemId)
    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const referenciaAlDoc = doc (collectionProd, itemId)
      getDoc(referenciaAlDoc)
      .then ((res)=>{
        setProductDetail({id: res.id, ...res.data ()})
      })
      .catch ((error)=> console.log(error))
      .finally (()=> setLoading (false))
    },[])
    //useEffect(()=>{
    //    setLoading(true)
    //    getOneProduct(itemId)
    //    .then((res)=> setProductDetail(res))
    //    .catch((error)=> console.log (error))
    //    .finally(()=> setLoading(false))
    //},[])

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
