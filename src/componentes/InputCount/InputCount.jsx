import React from "react";
import { Link } from "react-router-dom";

const InputCount = () => {
  return (
    <>
      <Link to="/cart">
        <button className="btn btn-outline-">Ir al Carrito</button>
      </Link>
      <Link to="/">
        <button className="btn btn-outline-">Seguir comprando</button>
      </Link>
    </>
  );
};
export default InputCount;
