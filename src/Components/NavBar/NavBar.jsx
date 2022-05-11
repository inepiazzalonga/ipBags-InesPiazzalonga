import React from 'react'
import logo from "../../Assets/fav.png"
import "./NavBar.css"

export const NavBAr = () => {
  return (
    <header>
        <nav className='navBar'>
            <img src={logo} className="logoNav"/>
           
            <ul>
                <li>Carteras</li>
                <li>Riñoneras</li>
                <li>Shopper</li>
                <li>Mochilas</li>
                <li>Bandoleras</li>
            </ul>
        </nav>
    </header>
  )
}
