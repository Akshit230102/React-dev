import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () =>{
    dispatch(clearCart());
  }
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
        <div className="w-1/2 mx-auto flex justify-between">
          <div className="text-2xl font-bold m-4">Cart</div>
          <div className="bg-black m-3 rounded-xl">
            <button className="p-2 text-white cursor-pointer" onClick={handleClearCart}> 
              Clear Cart 
            </button>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
            <ItemList items={cartItems} />
        </div>
    </div>
  );
};

export default Cart;
