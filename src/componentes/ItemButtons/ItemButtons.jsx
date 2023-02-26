import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const ItemButtons = ({ producto }) => {
  const { agregar } = useCartContext();
  const { inputType, setInputType } = useState("button");

  const onAdd = (id) => {
    agregar({ ...producto, cantidad: 1 });
    setInputType("input");
  };

  return (
    <div>
      {inputType === "button" ? (
        <button className="btn btn-outline-success m-2" onClick={onAdd}>
          Agregar al carrito
        </button>
      ) : (
        <p className="btn btn-success m-2">Agregado</p>
      )}
      <Link to={`/detalle/${producto.id}`}>
        <button className="btn btn-outline-primary m-2">Detalle</button>
      </Link>
    </div>
  );
};

export default ItemButtons;
