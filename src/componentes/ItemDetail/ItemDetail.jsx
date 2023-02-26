import ItemDescription from "../ItemDescription/ItemDescription";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";

const ItemDetail = ({ productos }) => {
  return <ItemDescription productos={productos} />;
};

export default ItemDetail;
