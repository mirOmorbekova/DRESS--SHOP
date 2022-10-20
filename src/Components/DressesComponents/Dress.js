import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Dress = ({dress}) => {
        const [quantity, setQuantity] = useState(0);
        const dispatch = useDispatch();
        return(
        <div>
                <img src={`${dress.img}.jpg`} alt="dress"/>
                <h2>"{dress.name}"</h2>
                <p className="price">$ {dress.price}</p>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <div className="App">
                <button  onClick={() => {dispatch(addItemToCart({dress, quantity}));}}>Add to cart</button>
                </div>
        </div>
        )
}

export default Dress;