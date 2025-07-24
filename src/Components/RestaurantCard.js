import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.card?.card?.info;
  return (
    <div className="w-[250] h-[350] p-4 m-4 bg-gray-100 rounded-xl hover:bg-gray-200">
      <img
        className="rounded-xl h-[150] w-full"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold"> {name}</h3>
      <h4> {cuisines.slice(0, 4).join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
