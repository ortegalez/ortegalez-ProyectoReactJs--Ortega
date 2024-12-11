import React from "react";

import { useCartContext } from "../../context/CartContext";
import ItemButtons from "../ItemButtons/ItemButtons";

import "../Item/Item.css";

const Item = ({ producto }) => {
  const { intl } = useCartContext();
  let cuotas = 3;

  return (
    <div className="card text-center mt-2 m-2">
      <img src={producto.imagen} alt="foto" className="w-100 card-img-top" />
      <h4>{producto.nombre}</h4>
      <h3 className=" text-danger">${intl(producto.precio)}</h3>
      <p className="card-text">Categoria: {producto.categoria}</p>
      <span className="card-text text-card">
        Hasta {cuotas} cuotas sin interés de ${intl(producto.precio / cuotas)}
      </span>
      <ItemButtons producto={producto} />
    </div>
  );
};

export default Item;
