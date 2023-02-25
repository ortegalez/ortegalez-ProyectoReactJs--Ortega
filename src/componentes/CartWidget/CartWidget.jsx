import shoppingCart from "../../../images/shopping-cart.svg";
import { useCartContext } from "../../context/CartContext";
import "../CartWidget/CartWidget.css";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <div className="carrito">
      <img src={shoppingCart} alt="carrito" />
      <h5 className="text-white">{cartList.length}</h5>
    </div>
  );
};

export default CartWidget;
