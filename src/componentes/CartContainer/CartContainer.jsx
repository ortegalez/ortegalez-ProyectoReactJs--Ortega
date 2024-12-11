import React from "react";

import ItemCartTotal from "../ItemCartTotal/ItemCartTotal";
import ItemCartEmpty from "../ItemCartEmpty/ItemCartEmpty";
import ItemCartList from "../ItemCartList/ItemCartList";

import "../CartContainer/CartContainer.css";

const CartContainer = () => {
  return (
    <section className="cartContainer-section">
      <div className="cartContainer-contenedor">
        <ItemCartList />
        <ItemCartEmpty />
      </div>
      <ItemCartTotal />
    </section>
  );
};

export default CartContainer;
