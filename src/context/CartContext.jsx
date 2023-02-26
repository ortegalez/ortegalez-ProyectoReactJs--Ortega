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
        item.id !== newProducto.id
          ? item
          : { ...item, cantidad: item.cantidad + newProducto.cantidad }
      );
      setCartList(newCartList);
    } else {
      setCartList([...cartList, newProducto]);
    }
  };

  const agregar = (newProducto) => {
    const existe = cartList.find((item) => item.id === newProducto.id);

    if (existe) {
      const newCartList = cartList.map((item) =>
        item.id !== newProducto.id
          ? item
          : { ...item, cantidad: 1, agregado: true }
      );
      setCartList(newCartList);
    } else {
      setCartList([...cartList, newProducto]);
    }
  };
  // -------------------------------------------
  const [inputType, setInputType] = useState(false);
  // ---------------------------------------
  const eliminarProducto = (id) => {
    const newCart = cartList.filter((item) => (item.id === id ? null : item));
    setCartList(newCart);
  };

  const vaciarCarrito = () => setCartList([]);

  const sumarCantidad = (id) => {
    const newCart = cartList.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCartList(newCart);
  };

  const restarCantidad = (id) => {
    const newCart = cartList.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    );

    const checkedCart = newCart.filter((item) =>
      item.cantidad === 0 ? null : item
    );
    setCartList(checkedCart);
  };

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
        sumarCantidad,
        restarCantidad,
        agregar,
        inputType,
        setInputType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
