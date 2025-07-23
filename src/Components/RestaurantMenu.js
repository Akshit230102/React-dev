import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2> Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            <p>
              {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100 || item?.card?.info?.finalPrice / 100}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
