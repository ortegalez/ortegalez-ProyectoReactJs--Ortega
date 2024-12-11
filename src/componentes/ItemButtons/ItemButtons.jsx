import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemButtons = ({ producto }) => {
  const { addToCart, cartList } = useCartContext();
  const isItemInCart = cartList.some((item) => item.id === producto.id);

  return (
    <div>
      {isItemInCart ? (
        <p className="btn btn-success m-2">Agregado</p>
      ) : (
        <button
          className="btn btn-outline-success m-2"
          onClick={() => addToCart({ ...producto, cantidad: 1 })}
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
