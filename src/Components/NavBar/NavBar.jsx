import React from 'react'
import logo from "../../Assets/fav.png"
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBAr = () => {
  return (
    <header>
            <img src={logo} className="logoNav"/>
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
