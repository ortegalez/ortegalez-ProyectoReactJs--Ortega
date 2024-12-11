import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newProducto) => {
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

  const cartListCount = () =>
    cartList.reduce((count, producto) => (count += producto.cantidad), 0);

  const deleteItem = (id) => {
    const newCart = cartList.filter((item) => (item.id === id ? null : item));
    setCartList(newCart);
  };

  const emptyCart = () => setCartList([]);

  const addItem = (id) => {
    const newCart = cartList.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCartList(newCart);
  };

  const subtractItem = (id) => {
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

  const intl = (valor) => {
    return new Intl.NumberFormat("de-DE", {
      maximumSignificantDigits: 4,
    }).format(valor);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        precioTotal,
        deleteItem,
        addItem,
        subtractItem,
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
