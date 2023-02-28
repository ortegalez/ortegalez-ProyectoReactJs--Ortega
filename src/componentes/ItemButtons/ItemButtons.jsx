import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemButtons = ({ producto }) => {
  const { agregar, cartList } = useCartContext();

  // Funcion para cotejar los productos del cartlist con los item que agregue desde itemDatailContainer
  const isItemInCart = cartList.some((item) => item.id === producto.id);

  // const isItemInCart = !!cartList.find(item => item.id === producto.id);
  // const isItemInCart = Boolean(cartList.find(item => item.id === producto.id));

  return (
    <div>
      {isItemInCart ? (
        <p className="btn btn-success m-2">Agregado</p>
      ) : (
        <button
          className="btn btn-outline-success m-2"
          onClick={() => agregar({ ...producto, cantidad: 1 })}
        >
          Agregar al carrito
        </button>
      )}

      <Link to={`/detalle/${producto.id}`}>
        <button className="btn btn-outline-primary m-2">Detalle</button>
      </Link>
    </div>
  );
};

export default ItemButtons;
