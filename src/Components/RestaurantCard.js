import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3> {name}</h3>
      <h4> {cuisines.slice(0, 4).join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
