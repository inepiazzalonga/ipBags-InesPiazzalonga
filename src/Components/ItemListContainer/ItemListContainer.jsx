import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
// import { products }from "../../Data/productos"
import { Loader } from '../Loader/Loader';
import { useParams } from 'react-router-dom';
// import { getData } from '../../Data/productos';
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"



export default function ItemListContainer({greeting = "Shop"}) { 
    const [productsList, setProducts] = useState([]);
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true);
    const {category} = useParams()

    // useEffect(()=>{
    //   const db = getFirestore()
    //   const queryCollection = collection(db, "productos")
    //   const queryCollectionFilter = query(queryCollection, where("category", "==", "shopper"))

    //   getDocs(queryCollectionFilter)
    //   .then(res=> setProducts(res.docs.map(item=>({id:item.id, ...item.data()}))))
    //   .catch((err)=> console.log(err))
    // .finally(()=>setLoader(false)) 
    // },[])

    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");

      if(!category){  
      getDocs(queryCollection)
        .then((resp) =>
          setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch((error) => error)
        .finally(() => setLoader(false))
      }else {
        const queryCollectionFilter = query(
          queryCollection,
          where("category", "==", category),
          );
          getDocs(queryCollectionFilter)
          .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
          )
          .catch((err) => console.error(err))
          .finally(() => setLoader(false));
        }
    }, [category]);


    // useEffect(() => {
    //   const db = getFirestore()
    //   const queryCollectionAll = collection(db, "productos")
    //   const queryCollectionCategory = collection(db, "category")
    //   const queryCollectionFilter = query(queryCollectionCategory, where("category", "==", true))

    //   if (categoryID) {
    //     getDocs(queryCollectionFilter)
    //   .then(res=> setProducts(res.docs.map(item=>({id:item.id, ...item.data()}))))
    //   .catch((err)=> console.log(err))
    //   .finally(()=>setLoader(false)) 
    //   } else {
    //   getDocs(queryCollectionAll)
    //   .then(res=> setProducts(res.docs.map(item=>({id:item.id, ...item.data()}))))
    //   .catch((err)=> console.log(err))
    //   .finally(()=>setLoader(false)) 
    //   }
    // }, [categoryID]);
  

    return (

      <>
        <h1 className="itemListContainer__title">{greeting}</h1>
        <div className="itemListContainer">

          {loader ? <Loader greeting={"Cargando productos..."}/> : <ItemList products={productsList}/>}         

        </div>
      </>
            
    );
  }