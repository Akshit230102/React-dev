import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const[showItems, setShowItems] = useState(false);
  return (
    <div className="w-1/2 p-6 my-4 mx-auto shadow-lg rounded-xl cursor-pointer" onClick={() => {
        setShowItems(!showItems);
    }}>
      <div className="flex justify-between">
        <h1 className="font-bold text-lg"> {data.title} ({data.itemCards.length}) </h1>
        <MdOutlineKeyboardArrowDown color="black" />
      </div>
      <div> {showItems && <ItemList items={data.itemCards}/>} </div>
    </div>
  );
};

export default RestaurantCategory;
