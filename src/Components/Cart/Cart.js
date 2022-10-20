import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

    const Cart = () => {
        const cartItems = useSelector(getCartItems);
        const totalPrice = useSelector(getTotalPrice);

    return(<div>
        <h1>My cart</h1>
        <img className="icon" src="https://cdn2.iconfinder.com/data/icons/finance-254/24/shopping-cart-256.png" alt="icon"/>
        <h3>TOTAL: $ {totalPrice} </h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}


export default Cart;