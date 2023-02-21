import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
// Borrar ese export

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (newProducto) => {
    const existe = cartList.find((item) => item.id === newProducto.id);

    if (existe) {
      const newCartList = cartList.map((item) =>
        item.id != newProducto.id
          ? item
          : { ...item, cantidad: item.cantidad + newProducto.cantidad }
      );
      setCartList(newCartList);
    } else {
      setCartList([...cartList, newProducto]);
    }
  };

  const eliminarProducto = (id) => {
    const newCart = cartList.filter((item) => (item.id === id ? null : item));
    setCartList(newCart);
  };

  const vaciarCarrito = () => setCartList([]);

  // const sumarCantidad = () => {

  // }

  // const restarCantidad = () => {}

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
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
