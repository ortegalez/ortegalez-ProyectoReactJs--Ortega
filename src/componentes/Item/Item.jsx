import React from "react";
import "../Item/Item.css";
import ItemButtons from "../ItemButtons/ItemButtons";

const Item = ({ producto }) => {
  let cuotas = 3;
  // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
  // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));

  return (
    <div className="card text-center mt-2 m-2">
      <img src={producto.imagen} alt="foto" className="w-100 card-img-top" />
      <h4>{producto.nombre}</h4>
      <h3 className=" text-danger">
        $
        {new Intl.NumberFormat(
          "de-DE"
          // {
          //   style: "currency",
          //   currency: "EUR",
          // }
        ).format(producto.precio)}
      </h3>
      <p className="card-text">Categoria: {producto.categoria}</p>
      <span className="card-text text-card">
        Hasta {cuotas} cuotas sin interés de $
        {new Intl.NumberFormat("de-DE", {
          maximumSignificantDigits: 4,
        }).format(producto.precio / cuotas)}
      </span>
      <ItemButtons producto={producto} />
    </div>
  );
};

export default Item;
