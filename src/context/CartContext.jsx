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

  const sumarCantidad = (id) => {
    const newCart = cartList.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCartList(newCart);
  };

  // map devuelve un array igual o mayor al original
  // filter devuelve un array igual o menor al original

  const restarCantidad = (id) => {
    const newCart = cartList.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    // En este caso, al ya tener un elemento con cantidad cero, el null sirve para "eliminar" al item
    const checkedCart = newCart.filter((item) =>
      item.cantidad === 0 ? null : item
    );
    setCartList(checkedCart);
  };

  // const restarCantidad = (id) => {
  //   const newCart = cartList.map((item) =>
  //     item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
  //   );

  //   const cantidadCero = newCart.some((item) => item.cantidad === 0);

  //   if (cantidadCero) {
  //     eliminarProducto(id);
  //   } else {
  //     setCartList(newCart);
  //   }
  // };

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
