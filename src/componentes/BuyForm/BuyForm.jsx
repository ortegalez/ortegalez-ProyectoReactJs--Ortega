import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const BuyForm = () => {
  const { cartList, intl } = useCartContext();

  /*____________________________ Crear formulario controlado_________________________ 
Los inputs del formulario los controlamos mediante estados controlados y eventos. 
*/
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    repetirEmail: "",
  });

  const IVA = 21;

  const imp = (IVA, subTotal) => {
    return (subTotal * IVA) / 100;
  };

  const subTotal = cartList.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const total = (IVA, subTotal) => {
    return subTotal + (subTotal * IVA) / 100;
  };

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
  return (
    <div className="card">
      <form onSubmit={insertOrder}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese nombre y apellido"
          onChange={handleOnChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Ingrese teléfono"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Ingrese email"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="repetirEmail"
          placeholder="Repetir email ingresado"
          onChange={handleOnChange}
        />
        <button className="btn btn-dark" type="submit">
          Generar Orden
        </button>
      </form>
    </div>
  );
};

export default BuyForm;
