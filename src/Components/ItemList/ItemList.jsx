import Item from "../Item/Item";
import './ItemList.css';


const ItemList = ({products}) => { 

  return (
    <>
      <div className="product-list-container">
        {products.map( product => <Item key={product.id} id={product.id} name={product.name} img={product.img}/> ) }
      </div>   
                
     
    </>

  );
};

export default ItemList;