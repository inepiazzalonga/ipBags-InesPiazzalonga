import React from 'react'
import loader from "../../Assets/loader.gif"


export const Loader = () => {
  return (
    <div className='loaderInicio'>
        <img src={loader} className="loader"/>
        <p className='loading'>Cargando productos...</p> 
    </div>
  )
}
