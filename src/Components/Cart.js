import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
        <div className="text-center text-2xl font-bold m-4">Cart</div>
        <div className="w-1/2 mx-auto">
            <ItemList items={cartItems} />
        </div>
    </div>
  );
};

export default Cart;
