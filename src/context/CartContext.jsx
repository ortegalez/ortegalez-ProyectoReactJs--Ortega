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
  // Esta funcion es la del boton "Agregar a carrito" que esta en Home
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
      setCartListNumber(cartListCount);
    }
  };

  const cartListCount = () =>
    cartList.reduce((count, producto) => (count += producto.cantidad), 0);

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

  const IVA = 21;

  const imp = (IVA, subTotal) => {
    return (subTotal * IVA) / 100;
  };

  const subTotal = cartList.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const total = (IVA, subTotal) => {
    return subTotal + (subTotal * IVA) / 100;
  };

  // metodo para dar formato de numero contables a un valor numerico
  // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
  const intl = (valor) => {
    return new Intl.NumberFormat("de-DE", {
      maximumSignificantDigits: 4,
    }).format(valor);
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
        intl,
        IVA,
        imp,
        total,
        subTotal,
        cartListCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
