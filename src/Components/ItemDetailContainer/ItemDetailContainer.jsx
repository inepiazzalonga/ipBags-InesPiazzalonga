
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getFetch } from '../../Data/productos';


export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    const [loader, setLoader] = useState(true);
    const { detalleID } = useParams()



    useEffect(()=>{
      getFetch(parseInt(detalleID))
      .then(res => setProducts(res))
      .catch((err)=> console.log(err))
      .finally(()=>setLoader(false))
    }, [])

    console.log(products)

  return (
      <>
      <div>
      <ItemDetail  products={products} />

      </div>
      
      </>
    
  )
}
