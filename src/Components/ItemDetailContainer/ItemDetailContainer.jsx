
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import {getData} from '../../Data/productos';
import { Loader } from '../Loader/Loader';


export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(() => {
      getData(id)  // fetch llamada a una api  
      .then(respuesta=> setProduct(respuesta))
      .catch((err)=> console.log(err))
      .finally(()=>setLoader(false))     
  }, [])

console.log(product)
console.log(id)

  return (
      <>
      <div>
        {loader ? <Loader greeting={"Please wait 💓"}/> : <ItemDetail  product={product}/> }
      

      </div>
      
      </>
    
  )
}
