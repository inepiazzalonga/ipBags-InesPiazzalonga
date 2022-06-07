import React from 'react'
import imgModel from "../../assets/our-world-la-sierra-jewelry.png"
import { Link } from 'react-router-dom'
import "./Home.css"
import { Footer } from '../Footer/Footer'
import { products } from '../../Data/productos'
import { addDoc, collection, getFirestore } from "firebase/firestore"



export const Home = () => {

  function ProductsFB () {
    products.forEach((product)=>{
      const db = getFirestore()
      const queryCollectionPush = collection(db, "products")
      addDoc(queryCollectionPush, product)
      .then((res)=>console.log(res))
    })
  }
  


  return (
    <div>
        <div className='home'>
            <img src={imgModel} alt="" className='modelHome'/>
            <div className='goToShop'>
                <h2>Join our <br /> universe</h2>
                <Link to="/shop">
                    <button onClick={ProductsFB}>SHOP NOW</button>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
