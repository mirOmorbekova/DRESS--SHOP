import dataDresses from "../data/dataDresses";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    
    const dresses = dataDresses.find(item => item.id  === cartItem.dressId);
    const dispatch = useDispatch();
    return(
        <div>
            <div className="cart">
            <p>"{dresses.name}"  -</p>
            <p> Price: $ {dresses.price * cartItem.quantity}</p>
            </div>
            <p>{cartItem.quantity} piece(s)</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="iconDelete" src="http://cdn.onlinewebfonts.com/svg/img_229056.png" alt="iconDelete"/>
            </span>
        </div>
    )
}

export default CartItem;