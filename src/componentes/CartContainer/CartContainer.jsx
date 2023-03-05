import React from "react";

import ItemCartTotal from "../ItemCartTotal/ItemCartTotal";
import ItemCartEmpty from "../ItemCartEmpty/ItemCartEmpty";
import ItemCartList from "../ItemCartList/ItemCartList";

import "../CartContainer/CartContainer.css";
import BuyForm from "../BuyForm/BuyForm";
// import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  // const { cartList } = useCartContext();

  // Deje el video de la clase en el min 1:09
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
