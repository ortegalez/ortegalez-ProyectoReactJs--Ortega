import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { useCartContext } from "../../context/CartContext";
import PurchaseReceipt from "../PurchaseReceipt/PurchaseReceipt";

const BuyForm = () => {
  const [show, setShow] = useState(false);
  const { cartList, intl, IVA, imp, subTotal, total, emptyCart } =
    useCartContext();

  const [isId, setIsId] = useState("");

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

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((resp) => setIsId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          repetEmail: "",
        });
      });

    setShow(true);
  };

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.nombre]: evt.target.value,
    });
  };

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
            type="tel"
            name="phone"
            placeholder="Ingrese teléfono"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Ingrese email"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="email"
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
      {isId !== "" && (
        <PurchaseReceipt show={show} setShow={setShow} isId={isId} />
      )}
    </div>
  );
};

export default BuyForm;
