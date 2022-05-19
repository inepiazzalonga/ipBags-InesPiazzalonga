import React from 'react'
import logo from "../../Assets/fav.png"
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import "./NavBar.css"

export const NavBAr = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className="logoNav"/>
      </Link>
            
        <nav className='navBar'>           
            <ul>          
              <Link to={"/category/Carteras"} className="link">
                <li>Carteras</li>         
              </Link>
             <Link to={"/category/riñoneras"} className="link">
                 <li>Riñoneras</li>              
             </Link>
             <Link to={"/category/shopper"} className="link">
                 <li>Shopper</li>
             </Link>
             <Link to={"/category/mochilas"} className="link">
                 <li>Mochilas</li>              
             </Link>
             <Link to={"/category/bandoleras"} className="link">
                <li>Bandoleras</li>        
             </Link>  
            </ul>
            <Link to={"/cart"}>
            <CartWidget/>
            </Link>
        </nav>
    </header>
  )
}
