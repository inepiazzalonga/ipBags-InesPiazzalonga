import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"

export default function Item({name, price, img, id}) {
    function cart(count){
        alert(`${count} items agregados al carrito`)
}
  return (
      <>
    <Link to={`/detail/${id}`} className="item">
      <div>
        <img className="item_img" src={img} alt="" />
        <div className='item_info'>
            <h3 className="item_title">{name}</h3>
            <p className='item_price'>{`Precio: ${price}`}</p>
        </div>
      </div>
        <button className='masInfo' >Más info</button>
        {/* <ItemCount initial={1} stock={5} onAdd={(cart)}/> */}
    </Link>
        </>
  )
}