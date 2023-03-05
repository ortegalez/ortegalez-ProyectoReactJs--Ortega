import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";

const BuyForm = () => {
  const { cartList, intl, IVA, imp, subTotal, total } = useCartContext();

  /*____________________________ Crear formulario controlado_________________________ 
Los inputs del formulario los controlamos mediante estados controlados y eventos. 
*/
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    repetEmail: "",
  });

  const insertOrder = (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = formData;
    order.isActive = true;
    order.items = cartList.map(({ id, nombre, precio, cantidad }) => ({
      id,
      nombre,
      precio,
      cantidad,
    }));
    order.total = total(IVA, subTotal);
    // Cargar un documento al firebase
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((resp) => console.log(resp));
    console.log(order);
  };

  //  Para que no ejecuten creamos una funcion
  const handleOnChange = (evt) => {
    // console.log(evt.target.nombre); // nombre del input
    // console.log(evt.target.value); // valor del input

    setFormData({
      // Uso el spread operator para acceder a las propiedades de mi objeto formulario
      ...formData,
      // Actualizo de forma dinamica la propiedad de mi objeto formulario
      [evt.target.nombre]: evt.target.value,
    });
  };

  console.log();
  return (
    <div className="card m-1 p-2 w-100">
      <h4 className="card-title">Datos del comprador</h4>
      <form onSubmit={insertOrder}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Ingrese nombre y apellido"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="number"
            name="phone"
            placeholder="Ingrese teléfono"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Ingrese email"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="repetEmail"
            placeholder="Repetir email ingresado"
            onChange={handleOnChange}
          />
        </div>
        <center>
          <button className="btn btn-outline-success m-1" onClick={insertOrder}>
            Finalizar compra
          </button>
          <Link to="/">
            <button className="btn btn-primary m-1">Seguir comprando</button>
          </Link>
        </center>
      </form>
    </div>
  );
};

export default BuyForm;
