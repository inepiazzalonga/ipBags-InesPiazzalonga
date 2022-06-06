import React from 'react'
import imgModel from "../../assets/our-world-la-sierra-jewelry.png"
import logo from "../../assets/fav.png"
import { Link } from 'react-router-dom'
import "./Home.css"
import { Footer } from '../Footer/Footer'


export const Home = () => {
  return (
    <div>
        <div className='home'>
            <img src={imgModel} alt="" className='modelHome'/>
            <div className='goToShop'>
                <h2>Join our <br /> universe</h2>
                <Link to="/shop">
                    <button>SHOP NOW</button>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
