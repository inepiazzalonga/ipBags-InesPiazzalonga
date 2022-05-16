import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { products }from "../../Data/productos"
import Loader from "../../Assets/loader.gif"
// import { getFetch } from '../../Data/productos';



export default function ItemListContainer({greeting = "Shop"}) { 
    const [productsList, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    
    const getData = new Promise ((res)=>{
      setTimeout(()=>{
        loader
        res(productsList)
      }, 2000)
    })
  
  
    useEffect(()=>{
      getData
      .then(res => setProducts(res))
      .catch((err)=> console.log(err))
      .finally(()=>setLoader(false))
    }, [])

    return (

        <>
        <h1 className="itemListContainer__title">{greeting}</h1>
        <div className="itemListContainer">
           
        {loader ? (<div className='loaderInicio'>
        <img src={Loader} className="loader"/>
        <p className='loading'>Cargando productos...</p> 
      </div>):<ItemList products={products}/>}         
        </div>
        </>
            
    );
  }