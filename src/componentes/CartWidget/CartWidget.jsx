import shoppingCart from "../../../images/shopping-cart.svg";
import { useCartContext } from "../../context/CartContext";
import "../CartWidget/CartWidget.css";

const CartWidget = () => {
  const { cartListCount } = useCartContext();

  return (
    <div className="shoppingCart m-1">
      <img src={shoppingCart} alt="Cart-icon" />
      <p className="shoppingCart-text">{cartListCount()}</p>
    </div>
  );
};

export default CartWidget;
