import React from 'react'
import Cart from "../../assets/carrito.gif"
import "./CartWidget.css"
import { useCartContext } from "../../context/CartContext"


export const CartWidget = () => {
  const {cartList}=useCartContext()
  console.log(cartList)
  const totalItems =  cartList.reduce((acc, item)=> acc = acc + item.count, 0)
    return (
    <>
    <img src={Cart} className="carrito"/>
    <button>{totalItems}</button>
    </>
  )
}
