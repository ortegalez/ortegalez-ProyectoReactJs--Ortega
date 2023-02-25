import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Item = ({ producto }) => {
  const { agregar } = useCartContext();
  const [inputType, setInputType] = useState("button");

  const onAdd = () => {
    agregar({ ...producto, cantidad: 1 });
    setInputType("input");
  };

  return (
    <div className="card w-25 mt-2 m-2">
      <div className="card-header">
        <h4>{producto.nombre}</h4>
      </div>
      <div className="card-body">
        <img src={producto.imagen} alt="foto" className="w-100" />
        <h5>
          Categoria: {producto.categoria} <br />
        </h5>
        <h5>
          Precio: ${producto.precio} <br />
        </h5>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-success w-50 btn-sm" onClick={onAdd}>
          {inputType === "button" ? "Agregar al carrito" : "Agregado"}
        </button>
        <Link to={`/detalle/${producto.id}`}>
          <button className="btn btn-outline-primary w-50 btn-sm">
            Detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
