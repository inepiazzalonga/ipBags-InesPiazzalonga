import React from 'react'
import Cart from "../../assets/carrito.gif"
import "./CartWidget.css"

export const CartWidget = () => {
  return (
    <>
    <img src={Cart} className="carrito"/>
    </>
  )
}
