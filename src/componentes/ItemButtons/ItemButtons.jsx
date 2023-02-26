import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const ItemButtons = ({ producto }) => {
  const { agregar, cartList } = useCartContext();
  // const [inputType, setInputType] = useState("button");

  // const myData = inputType.myData;
  // console.log(myData);

  const onAdd = () => {
    agregar({ ...producto, cantidad: 1, agregado: true });
    // setInputType(true);
  };

  /*
() => eliminarProducto(producto.id)

*/

  return (
    <div>
      {producto.agregado === false ? (
        <button
          className="btn btn-outline-success m-2"
          onClick={(producto) => onAdd(producto.id)}
        >
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
