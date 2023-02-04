import imagen from '../../../images/shopping-cart.svg'
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img src={imagen} alt="carrito"/>
        <p>0</p>
    </div>
  )
}

export default CartWidget