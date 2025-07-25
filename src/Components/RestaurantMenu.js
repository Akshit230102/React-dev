import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold m-4">{name}</h1>
        <p className="text-xl m-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <div>
          <ul>
            {categories.map(category=> <li key={category?.card?.card?.title}><RestaurantCategory data={category?.card?.card}/></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
