import React, { useEffect, useState } from 'react';
import Item from "../Item/Item";
import './ItemList.css';
import Loader from "../../Assets/loader.gif"
import productsList from "../../Data/csvjson.json"


const ItemList = () => {
  
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
    <div className="product-list-container">
      {
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
           
                return (
                  <div key={product.id} className="itemInList">
                    <Item
                      img={product.img}
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) :  (<div className='loaderInicio'>

           <img src={Loader} className="loader"/>
          <p className='loading'>Cargando productos...</p>
        </div>
       
     
            
        ) 
      }
    </div>
  );
};

export default ItemList;