import React, { useState } from 'react'
import { BuyButton } from '../BuyButton/BuyButton'
import ItemCount from '../ItemCount/ItemCount'

import "./ItemDetail.css"


export const ItemDetail = ({product, onAdd}) => {
    const [inputType, setInputType] = useState('itemCount');

    function handleInputType() {
        setInputType('buyButtons');
    }

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
            {inputType === 'itemCount' ?
                    <ItemCount initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>:
                    <BuyButton/>}
            {/* <ItemCount initial={1} stock={5} onAdd={(cart)}/> */}
            
        </div>
    </div>
  )
}







