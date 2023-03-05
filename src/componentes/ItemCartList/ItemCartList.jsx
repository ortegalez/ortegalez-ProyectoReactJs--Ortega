import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const ItemCartList = () => {
  const { cartList } = useCartContext();
  return (
    <div>
      {cartList.map((producto) => (
        <ItemCart producto={producto} />
      ))}
    </div>
  );
};

export default ItemCartList;
