import React from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

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
      <center>
        <button className="btn btn-outline-success m-1">
          {/* <button className="btn btn-outline-success m-1" onClick={insertOrder}> */}
          Comprar
        </button>
        <Link to="/">
          <button className="btn btn-outline-primary m-1">
            Seguir comprando
          </button>
        </Link>
      </center>
    </aside>
  );
};

export default ItemCartTotal;
