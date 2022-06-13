import { useCartContext } from '../../context/CartContext'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import logo from "../../Assets/fav.png"
import React from 'react'
import "./NavBar.css" 

export const NavBAr = () => {
  const {cartList}=useCartContext()

  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className="logoNav"/>
      </Link>
            
        <nav className='navBar'>           
            <ul>          
              <Link to={`/shop/category/carteras`} className="link">
                <li>Carteras</li>         
              </Link>
             <Link to={`/shop/category/riñoneras`} className="link">
                 <li>Riñoneras</li>              
             </Link>
             <Link to={`/shop/category/shopper`} className="link">
                 <li>Shopper</li>
             </Link>
             <Link to={`/shop/category/mochilas`} className="link">
                 <li>Mochilas</li>              
             </Link>
             <Link to={`/shop/category/bandoleras`} className="link">
                <li>Bandoleras</li>        
             </Link>  
            </ul>
            {cartList.length ? <Link to={"/cart"}>
              <CartWidget/>
            </Link> : <CartWidget/>}
            
        </nav>
     
    </header>
  )
}
