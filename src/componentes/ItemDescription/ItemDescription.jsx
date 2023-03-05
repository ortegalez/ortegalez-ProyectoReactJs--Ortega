import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";

const ItemDescription = ({ productos }) => {
  const { agregarCarrito, intl } = useCartContext();
  // Declaro una useState con el nombre inputType y le doy un valor inicial con el string "button"
  // Ese buttton podria ser otra palabra, "si", "no".
  const [inputType, setInputType] = useState("button");

  // Aqui en esta funcion que llamemos onAdd, le pasamos la funcion "agregarCarrito"
  // que es una funcion global que esta declarada en el Context; y que ademas dentro de ese onAdd
  // indico que setee el valor que tiene inputType, q lo cambie de "button" a "input" cuando haga click

  const onAdd = (cant) => {
    agregarCarrito({ ...productos, cantidad: cant });
    setInputType("input");
  };

  return (
    <>
      {/* <div>
        <p>Todos los productos > Aceites </p>
      </div> */}
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
              {/* Aqui tengo entonces un ternario que es como un if.. else, donde el evalua el valor de inputType */}
              {/* El valor que tiene antes del click es "button", por la condicion que seria como si, pero al darle click */}
              {/* se produce un cambio de estado, es decir q se renderiza y cuando carga el valor inputType es "input" */}
              {/* por lo que muestra el elemento que llame InputCount que el que tiene los botones de "ir a carrito o seguir comprando" */}

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
