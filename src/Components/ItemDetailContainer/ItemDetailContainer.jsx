
import { useParams } from 'react-router-dom';
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { Footer } from '../Footer/Footer';
import React, { useEffect, useState } from 'react';



export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const dbQuery = doc(db, "productos", id)
    getDoc(dbQuery)
    .then(res => setProduct( {id : res.id, ...res.data() } ) )
    .catch((err)=> console.log(err))
    .finally(()=>setLoader(false))   
 }, [])



  return (
      <>
      <div>
        {loader ? <Loader greeting={"Please wait 💓"}/> : <ItemDetail  product={product}/> }  

      </div>
      <Footer/>
      
      </>
    
  )
}
