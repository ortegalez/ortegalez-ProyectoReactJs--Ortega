import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";

const ItemDescription = ({ productos }) => {
  const { addToCart, intl } = useCartContext();
  const [inputType, setInputType] = useState("button");
  const onAdd = (cant) => {
    addToCart({ ...productos, cantidad: cant });
    setInputType("input");
  };

  return (
    <>
      <div className="mt-2 d-flex justify-content-center ">
        <div className="card w-75 d-flex flex-row ">
          <div className="w-100">
            <img src={productos.imagen} alt="foto" className="w-100" />
          </div>
          <div className="w-100 p-2">
            <h4 className="card-title">{productos.nombre}</h4>
            <h2 className="card-title text-center text-danger">
              ${intl(productos.precio)}
            </h2>
            <h5 className="card-subtitle mb-2 text-muted">Descripción:</h5>
            <p className="card-text">{productos.detalle}.</p>
            <h5 className="card-subtitle mb-2 text-muted">Categoria:</h5>
            <p className="card-text">{productos.categoria}</p>
            <center>
              {inputType === "button" ? (
                <ItemCount initial={1} stock={30} onAdd={onAdd} />
              ) : (
                <InputCount />
              )}
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDescription;
