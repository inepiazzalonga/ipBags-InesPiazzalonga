import { useCartContext } from "../../context/CartContext"
import "./Cart.css"
import bag from "../../assets/bag.png"
import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react'

export const Cart = ({product}) => {

  const {cartList, deleteCart, deleteItem} = useCartContext()

  const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)



console.log(total)
  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Tu pedido</h2>
          {cartList.map(product => 
          <li className="cartItem">
            <Link to={`/detail/${product.id}`}>
            <img className="img-cart" src={product.img}></img>
            </Link>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            {/* <button onClick={restar}>-</button> */}
            <p>Cantidad: {product.count}u</p>
            {/* <button onClick={sumar}>+</button> */}

            <button onClick={()=>deleteItem(product.id)} className="delete-item">X</button>
          </li>)}
          {cartList.length ? <div>`
                                <h3 className="totalCompra">Total: ${total}</h3>
                                <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>
                            </div>  : <div className="carritoVacio">
                                                <p>No hay productos en tu carrito</p>
                                                <Link to={"/"}>
                                                  <p>Ir a la tienda</p>
                                                  <img src={bag}/>
                                                </Link>
                                              </div> }
                              
      </div>
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
    </div>
  )
}


