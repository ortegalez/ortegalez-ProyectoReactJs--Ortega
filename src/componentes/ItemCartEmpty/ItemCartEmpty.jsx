import React from "react";
import { Link } from "react-router-dom";

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
        <center className="itemCart-vacio">
          <h3>El carrito está vacio</h3>
          <Link to="/">
            <button className="btn btn-outline-dark m-1">Ver productos</button>
          </Link>
        </center>
      ) : (
        <button className="btn btn-danger" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      )}
    </div>
  );
};

export default ItemCartEmpty;
