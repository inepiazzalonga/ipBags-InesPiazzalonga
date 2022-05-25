import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { products }from "../../Data/productos"
import { Loader } from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { getData } from '../../Data/productos';




export default function ItemListContainer({greeting = "Shop"}) { 
    const [productsList, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {category} = useParams()


    // useEffect(()=>{
    //   getData
    //   .then(res => setProducts(res))
    //   .catch((err)=> console.log(err))
    //   .finally(()=>setLoader(false))
    // }, [])

    useEffect(() => {
      if (category) {
        getData()
        .then((res) => 
          setProducts(res.filter((item) => item.category === category)))
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
      } else {
        getData()
        .then((res) => setProducts(res))
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
      }
    }, [category]);
  

    return (

      <>
        <h1 className="itemListContainer__title">{greeting}</h1>
        <div className="itemListContainer">

          {loader ? <Loader greeting={"Cargando productos..."}/> : <ItemList products={productsList}/>}         

        </div>
      </>
            
    );
  }