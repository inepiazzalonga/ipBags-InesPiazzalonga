import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"


export const ItemDetail = ({product}) => {
    function cart(count){
        alert(`${count} items agregados al carrito`)
    }
    // console.log(product)
  return (
    <div className='itemDetail'>
        <div className='detailImg'>
            <img className="item_det_img" src={product.img} alt="" />
        </div>
        <div className='detailInfo'>
            <h3 className="item_title">{`Producto: ${product.name}`}</h3>
            <p>Descripción: {`${product.description}`}</p>
            <p className='item_price'>{`Precio: ${product.price}`}</p>
            <ItemCount initial={1} stock={5} onAdd={(cart)}/>
        </div>
    </div>
  )
}







