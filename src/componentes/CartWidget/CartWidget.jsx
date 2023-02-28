import shoppingCart from "../../../images/shopping-cart.svg";
import { useCartContext } from "../../context/CartContext";
import "../CartWidget/CartWidget.css";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <div className="shoppingCart m-1">
      <img src={shoppingCart} alt="Cart-icon" />
      <p className="text-white">{cartList.length}</p>
    </div>
  );
};

export default CartWidget;
