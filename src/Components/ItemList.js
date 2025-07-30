import { FOOD_ITEM_URL } from "../Utils/constants"
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../Utils/cartSlice";

const ItemList = ({items}) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item?.card?.info?.id))
  }
  return (
    <div>
        {items.map(item =>(
            <div data-testid="foodItem" key={item?.card?.info?.id} className="p-4 border-b border-gray-200 flex">
                <div className="w-5/6 text-left">
                  <h1 className="font-bold py-2">{item?.card?.info?.name}  -  ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</h1>
                  <p className="py-2 text-sm w-2/3">{item?.card?.info?.description}</p>
                </div>
                <div>
                  <div className="flex justify-between my-1">
                    <div className="border-red-700 border-1 rounded-xl">
                      <button className="p-1 mx-1 text-red-700 cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(item);
                      }}> 
                        Remove</button>
                    </div>
                    <div className="border-green-700 border-1 rounded-xl">
                      <button className="p-1 mx-1 text-green-700 cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        handleAddItem(item);
                      }}> 
                        Add</button>
                    </div>
                  </div>
                  <img className="max-h-32 rounded-xl" src={FOOD_ITEM_URL+item?.card?.info?.imageId}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList
