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
                <li>Carteras</li>
                <li>Riñoneras</li>
                <li>Shopper</li>
                <li>Mochilas</li>
                <li>Bandoleras</li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}
