import React from "react";

import { useCartContext } from "../../context/CartContext";
import BuyForm from "../BuyForm/BuyForm";

import "../ItemCartTotal/ItemCartTotal.css";

const ItemCartTotal = () => {
  const { cartList, intl, IVA, imp, subTotal, total } = useCartContext();

  return (
    <aside className="itemCart-total p-2">
      <div className="d-flex justify-content-between">
        <h4>Sub-Total:</h4>
        <h4>${intl(subTotal)}</h4>
      </div>
      <div className="d-flex justify-content-between">
        <h4>IVA {IVA}%:</h4>
        <h4>${intl(imp(IVA, subTotal))}</h4>
      </div>
      <div className="d-flex justify-content-between">
        <h4>Total:</h4>
        <h4>${intl(total(IVA, subTotal))}</h4>
      </div>
      {/* <BuyForm /> */}
      {cartList.length !== 0 ? <BuyForm /> : null}
    </aside>
  );
};

export default ItemCartTotal;
