
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import {getData} from '../../Data/productos';
import Loader from "../../Assets/loader.gif"

export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    fetch(getData)
      .then(res => res.json()) 
      .then(res=> setProducts(res))
      .catch((err)=> console.log(err))
      .finally(()=>setLoader(false))     
  }, [])

console.log(products)

  return (
      <>
      <div>
        {loader ? (<div className='loaderInicio'>
                  <img src={Loader} className="loader"/>
                  <p className='loading'>Please wait 💓</p> 
                  </div>) : 
                  <ItemDetail  product={products}/>
        }
      

      </div>
      
      </>
    
  )
}
