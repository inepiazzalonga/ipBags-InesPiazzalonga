import React from 'react'
// import Loader from "../Loader/Loader"
import "./Cart.css"

export const Cart = () => {

  return (
    <>
    
    <div>
    <h1 className='cartTitle'>Finalizar compra</h1>
    <div className="cart">
        <div className="cartInfo">
            <form>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Apellido"/>
            <input type="text" placeholder="Dirección"/>
            <input type="text" placeholder="Localidad"/>
            <input type="text" placeholder="Nombre"/>
            <button type="submit">Terminar pedido</button>
            </form>

        </div>
        <div className='cartItems'>
            <h2>Tu pedido:</h2>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>

            </ul>

        </div>
    </div>
    </div>

    </>
  )
}
  