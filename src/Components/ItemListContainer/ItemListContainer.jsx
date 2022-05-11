import React from 'react'
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer({greeting = "Shop"}) { 


    return (
        <>
        <h1 className="itemListContainer__title">{greeting}</h1>
        <div className="itemListContainer">
           
            <ItemList />
        </div>
        </>
            
    );
  }