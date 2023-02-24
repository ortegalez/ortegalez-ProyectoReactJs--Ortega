import ItemDescription from "../ItemDescription/ItemDescription";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";

const ItemDetail = ({ productos }) => {
  // const { agregarCarrito } = useCartContext();
  // const [inputType, setInputType] = useState("button");

  // const onAdd = (cant) => {
  //   agregarCarrito({ ...productos, cantidad: cant });
  //   setInputType("input");
  // };

  return (
    <>
      <ItemDescription productos={productos} />
      {/* {inputType === "button" ? (
        <ItemCount initial={1} stock={30} onAdd={onAdd} />
      ) : (
        <InputCount />
      )} */}
    </>
  );
};

export default ItemDetail;
