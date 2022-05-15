import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import {Link} from 'react-router-dom'



export const ItemDetail = ({products}) => {
    function cart(count){
        alert(`${count} items agregados al carrito`)
}
  return (
    <div className='itemDetail'>
        <div className='detailImg'>
            <img className="item_img" src={products.img} alt="" />
        </div>
        <div className='detailInfo'>
            <h3 className="item_title">{products.name}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi rerum ullam facere, cum mollitia, officiis sapiente esse explicabo repellendus deserunt earum facilis quas impedit suscipit at ratione iure repellat.</p>
            <p className='item_price'>{`Precio: ${products.price}`}</p>
        <ItemCount initial={1} stock={5} onAdd={(cart)}/>
        </div>
    </div>
  )
}







