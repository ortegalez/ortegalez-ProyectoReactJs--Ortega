import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCartEmpty = () => {
  const { cartList, vaciarCarrito } = useCartContext();

  const total = cartList.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  return (
    <div>
      {cartList.length === 0 ? (
        <div className="itemCart-vacio">
          <h3>El carrito está vacio :(</h3>
        </div>
      ) : (
        <button className="btn btn-danger" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      )}
    </div>
  );
};

export default ItemCartEmpty;
