import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../Utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams();

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL+resId);
    const json = await data.json();
    setResInfo(json);
  };

  if(resInfo === null) return <Shimmer/>;

  const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.categories[1] ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p> 
        <h2> Menu</h2>
        <ul>
            {itemCards.map(item=> 
            <li key={item?.card?.info?.id}>
              <p>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.finalPrice/100} </p>
            </li>)}
        </ul>
    </div>
  );
};

export default RestaurantMenu;
