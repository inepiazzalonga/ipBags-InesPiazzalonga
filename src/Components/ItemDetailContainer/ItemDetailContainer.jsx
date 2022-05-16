
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import { getFetch } from '../../Data/productos';
import Loader from "../../Assets/loader.gif"



// const findItem = (id) => {
//   return new Promise ((resolve) =>{
//     setTimeout(() => {
//         const itemDet = id ? products.find(product => product.id === id) : products
//         resolve (itemDet)
//     },2000);
//   });
// }

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const { detalleID } = useParams()


    useEffect(() =>{
      getFetch(detalleID)
      .then((resp) =>{setProducts(resp)})
      .catch((err) =>{console.log(err)})
      .finally(() => setLoader(false))
    },[])

console.log(products)

  return (
      <>
      <div>
        {loader ? (<div className='loaderInicio'>
                  <img src={Loader} className="loader"/>
                  <p className='loading'>Please wait 💓</p> 
                  </div>) : 
                  (<ItemDetail  product={products}/>) 
        }
      

      </div>
      
      </>
    
  )
}
