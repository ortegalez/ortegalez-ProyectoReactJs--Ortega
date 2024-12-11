import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
