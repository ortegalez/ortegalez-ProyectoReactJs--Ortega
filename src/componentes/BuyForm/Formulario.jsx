import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { useCartContext } from "../../context/CartContext";
import PurchaseReceipt from "../PurchaseReceipt/PurchaseReceipt";

const BuyForm = () => {
  const [show, setShow] = useState(false);

  const [isId, setIsId] = useState("");

  const { cartList, intl, IVA, imp, subTotal, total, emptyCart } =
    useCartContext();

  // Formulario controlado
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    repeatEmail: "",
  });

  // Funcion que genera advertencia:
  // function NotiflyAdv() {
  //   return toast.warn("¡Ingresa un Email Validos!", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   });
  // }

  // Esta funcion la meto dentro de una funcion que valide:
  const validateForm = (evt) => {
    evt.preventDefault();
    const regex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (
      regex.test(formData.email) &&
      formData.email !== " " &&
      formData.email === formData.repeatEmail
    ) {
      insertOrder();
    } else {
      console.log("Error en formulario del email");
    }
  };

  // const insertOrder = (evt) => {
  const insertOrder = () => {
    // evt.preventDefault();
    const order = {};
    order.buyer = formData;
    order.isActive = true;
    order.total = total(IVA, subTotal);
    order.items = cartList.map(({ id, nombre, precio, cantidad }) => ({
      id,
      nombre,
      precio,
      cantidad,
    }));
    setShow(true);
    // setIsId("el ID de su orden");
    // console.log(isId);

    // __________________ Firebase __________________
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
          repeatEmail: "",
        });
      });
  };

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="card m-1 p-2 w-100">
      <h4 className="card-title">Datos del comprador</h4>
      <form onSubmit={validateForm}>
        <div className="mb-2">
          <label className="form-label">Nombre y Apellido:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Ingrese nombre y apellido"
            onChange={handleOnChange}
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono:</label>
          <input
            className="form-control"
            type="tel"
            name="phone"
            placeholder="Ingrese teléfono"
            onChange={handleOnChange}
            value={formData.phone}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Ingrese email"
            onChange={handleOnChange}
            value={formData.email}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Repetir Email:</label>
          <input
            className="form-control"
            type="email"
            name="repeatEmail"
            placeholder="Repetir email ingresado"
            onChange={handleOnChange}
            value={formData.repeatEmail}
          />
        </div>
        <center>
          <button
            className="btn btn-outline-success m-1"
            type="submit"
            // onClick={validateForm}
          >
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
