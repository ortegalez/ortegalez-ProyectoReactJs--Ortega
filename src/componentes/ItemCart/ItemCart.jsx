import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import trash from "../../../public/trash.png";
import "../ItemCart/ItemCart.css";

const ItemCart = ({ producto }) => {
  const { deleteItem, addItem, subtractItem } = useCartContext();

  return (
    <div className="itemCart" key={producto.id}>
      <Link to={`/detalle/${producto.id}`}>
        <img src={producto.imagen} className="itemCart-img" />
      </Link>
      <div className="itemCart-detalles">
        <h4>{producto.nombre}</h4>
        <p>{producto.detalle}.</p>
      </div>
      <div>
        <h5>Precio</h5>
        <h4>${producto.precio}</h4>
      </div>
      <div>
        <h5>Cantidad</h5>
        <div className="itemCart-cantidad">
          <button
            className="btn btn-outline-primary"
            onClick={() => addItem(producto.id)}
          >
            +
          </button>
          <center>
            <label>{producto.cantidad}</label>
          </center>
          <button
            className="btn btn-outline-primary"
            onClick={() => subtractItem(producto.id)}
          >
            -
          </button>
        </div>
      </div>
      <div>
        <h5>Sub-total</h5>
        <h4>${producto.precio * producto.cantidad}</h4>
      </div>
      <div className="itemCart-trash">
        <img src={trash} onClick={() => deleteItem(producto.id)}></img>
      </div>
    </div>
  );
};

export default ItemCart;
