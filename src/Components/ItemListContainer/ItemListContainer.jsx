import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import productsList from "../../Data/csvjson.json"
import Item from "../Item/Item"
import Loader from "../../Assets/loader.gif"



export default function ItemListContainer({greeting = "Shop"}) { 
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    
    const getData = new Promise ((res)=>{
      setTimeout(()=>{
        loader
        res(productsList)
      }, 3000)
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
           
        {products.length > 0 ? <ItemList products={products}/> :  (<div className='loaderInicio'>
        <img src={Loader} className="loader"/>
        <p className='loading'>Cargando productos...</p> 
      </div>)}         
        </div>
        </>
            
    );
  }