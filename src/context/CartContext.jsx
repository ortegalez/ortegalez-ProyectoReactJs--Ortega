import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
// Borrar ese export

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (newProducto) => {
    setCartList([...cartList, newProducto]);
  };

  const vaciarCarrito = () => setCartList([]);

  const precioTotal = () => {
    cartList.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartList, agregarCarrito, vaciarCarrito, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
