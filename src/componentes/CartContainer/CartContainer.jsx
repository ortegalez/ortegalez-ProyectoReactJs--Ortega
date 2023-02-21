import React from "react";
import { useCartContext } from "../../context/CartContext";
import "../CartContainer/CartContainer.css";
import trash from "../../../public/trash.png";

const CartContainer = () => {
  const {
    cartList,
    vaciarCarrito,
    eliminarProducto,
    sumarCantidad,
    restarCantidad,
  } = useCartContext();

  const total = cartList.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  console.log(total);

  return (
    <div className="cartContainer-contenedor">
      {cartList.map((producto) => (
        <div className="itemCart" key={producto.id}>
          <img src={producto.imagen} className="itemCart-img" />

          <div className="itemCart-detalles">
            {/* <h5>Detalles</h5> */}
            <h4>{producto.nombre}</h4>
            <p>{producto.detalle}.</p>
          </div>

          <div>
            <h5>Precio</h5>
            <h4>${producto.precio}</h4>
          </div>

          <div>
            <h5>Sub-total</h5>
            <h4>${producto.precio * producto.cantidad}</h4>
          </div>

          <div>
            <h5>Cantidad</h5>
            <div className="itemCart-cantidad">
              <button
                className="btn btn-outline-primary"
                onClick={() => sumarCantidad(producto.id)}
              >
                +
              </button>
              <center>
                <label>{producto.cantidad}</label>
              </center>
              <button
                className="btn btn-outline-primary"
                onClick={() => restarCantidad(producto.id)}
              >
                -
              </button>
            </div>
          </div>
          <img
            src={trash}
            style={{ width: "25px", height: "25px" }}
            onClick={() => eliminarProducto(producto.id)}
          ></img>
          {/* <button
            className="btn btn-outline-danger"
            onClick={() => eliminarProducto(producto.id)}
          >
            Quitar producto
          </button> */}
        </div>
      ))}
      <div className="itemCart-botones">
        <div>
          <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </div>
        <div className="itemCart-total">
          <div>
            <h4>Total: {total}</h4>
          </div>
          <div>
            <button className="btn btn-outline-success">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
