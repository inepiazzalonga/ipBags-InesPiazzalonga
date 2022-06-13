import { createContext, useContext, useState } from "react";
import { Modal } from "../Components/Modal/Modal";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const total = cartList.reduce(
    (acc, item) => (acc = acc + parseFloat(item.price) * item.count),
    0
  );

  //añadir al carrito
  const isInCart = (id) => cartList.some((el) => el.id === id);

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      alert("Ya agregaste este producto");
      let index = cartList.findIndex((el) => el.id === item.id);
      const newCartList = cartList;
      newCartList[index].quantity += item.quantity;
      setCartList(newCartList);
      updateCart();
    } else {
      alert(`Agregaste ${item.quantity} ${item.name} al carrito`);

      setCartList([...cartList, item]);
    }
  };

  //actualizar carrito//
  function updateCart() {
    setTotalPrice(
      cartList
        .map((element) => element.count * element.price)
        .reduce((anterior, siguiente) => anterior + siguiente, 0)
    );

    //productos totales //
    setTotalProducts(
      cartList
        .map((element) => element.count)
        .reduce((anterior, siguiente) => anterior + siguiente, 0)
    );
  }

  //eliminar producto//
  const deleteItem = (id) => {
    const newCart = [...cartList];
    let index = newCart.findIndex((product) => product.id === id);
    newCart.splice(index, 1);

    setCartList([...newCart]);
  };

  //vaciar carrito//
  const deleteCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
