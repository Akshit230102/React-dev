import { FOOD_ITEM_URL } from "../Utils/constants"

const ItemList = ({items}) => {
  return (
    <div>
        {items.map(item =>(
            <div key={item?.card?.info?.id} className="p-4 border-b border-gray-200 flex">
                <div className="w-5/6 text-left">
                <h1 className="font-bold py-2">{item?.card?.info?.name}  -  ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</h1>
                <p className="py-2 text-sm w-2/3">{item?.card?.info?.description}</p>
                </div>
                <div>
                    {console.log(item?.card?.info?.imageId)}
                    <img className="max-h-32 rounded-xl" src={FOOD_ITEM_URL+item?.card?.info?.imageId}/>
                </div>
          </div>
        ))}
    </div>
  )
}

export default ItemList
