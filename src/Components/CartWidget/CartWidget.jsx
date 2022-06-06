import { useCartContext } from "../../context/CartContext"
import Cart from "../../assets/carrito.gif"
import React from 'react'
import "./CartWidget.css"


export const CartWidget = () => {
  const {cartList}=useCartContext()
 
  const totalItems =  cartList.reduce((acc, item)=> acc = acc + item.count, 0)
    return (
    <>
    {cartList.length ?  <div>
                          <img src={Cart} className="carrito"/>
                          <button className='totalItems'>{totalItems}</button>
                        </div> :  
                        <div>
                          <img src={Cart} className="carrito"/>
                          <button className='totalItems'>{totalItems}</button>
                        </div>} 
                      

    </>
  )
}
