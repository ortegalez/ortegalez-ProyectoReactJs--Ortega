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
  console.log(cartList.length);

  return (
    <section className="cartContainer-section">
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
            <div className="itemCart-trash">
              <img
                src={trash}
                onClick={() => eliminarProducto(producto.id)}
              ></img>
            </div>
            {/* <button
            className="btn btn-outline-danger"
            onClick={() => eliminarProducto(producto.id)}
          >
            Quitar producto
          </button> */}
          </div>
        ))}
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
      </div>
      <aside className="itemCart-total p-2">
        <div className="d-flex justify-content-between">
          <h4>Sub-Total:</h4>
          <h4>${total}</h4>
        </div>
        <div className="d-flex justify-content-between">
          <h4>Total:</h4>
          <h4>${total * 1.21}</h4>
        </div>
        <center>
          <button className="btn btn-outline-success m-1">Comprar</button>
          <button className="btn btn-outline-primary m-1">
            Seguir comprando
          </button>
        </center>
      </aside>
    </section>
  );
};

export default CartContainer;
