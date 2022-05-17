import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function contadorMas() {
    if (count < stock) {
      setCount(count + 1);
    }else{
      alert("No hay mas stock")
    }
  }

  function contadorMenos() {
    if (count > initial) {
      setCount(count - 1);
    }else if (count<0){
      alert("El carrito está vacío")
    }
  }

  return (

<>
<div className="itemCount">
  <div className="sumaResta">
      <button onClick={contadorMenos}>-</button>
      <p>{count}</p>
      <button onClick={contadorMas}>+</button>
  </div>
  <div className="containerBotonCarrito">
    <button className="botonCarrito" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>       
  </div>

</div>


</>
      
   
  );
}

export default ItemCount;