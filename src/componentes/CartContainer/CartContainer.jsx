import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cartList, vaciarCarrito } = useCartContext();

  return (
    <div>
      {cartList.map((producto) => (
        <div key={producto.id} className="card w-25 m-2 mt-5">
          <img src={producto.imagen} style={{ width: 100 }} />
          <ul>
            <li>Nombre: {producto.nombre}</li>
            <li>Cantidad: {producto.cantidad}</li>
            <li>Precio: ${producto.precio}</li>
            <li>Sub Total: ${producto.precio * producto.cantidad}</li>
          </ul>
          <button className="btn btn-outline-danger">Quitar producto</button>
        </div>
      ))}

      <h4>
        Total: $
        {cartList.reduce(
          (acc, producto) => acc + producto.precio * producto.cantidad,
          0
        )}
      </h4>
      <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
        Vaciar Carrito
      </button>
      <button className="btn btn-outline-success">Comprar</button>
    </div>
  );
};

export default CartContainer;
