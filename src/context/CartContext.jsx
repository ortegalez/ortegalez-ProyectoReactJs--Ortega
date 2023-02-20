import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
// Borrar ese export

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (newProducto) => {
    const existe = cartList.find((item) => item.id === newProducto.id);

    if (existe) {
      const newCartList = cartList.map((item) => {
        if (item.id != newProducto.id) {
          return item;
        } else {
          return { ...item, cantidad: item.cantidad + newProducto.cantidad };
        }
      });
      setCartList(newCartList);
    } else {
      setCartList([...cartList, newProducto]);
    }
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
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
