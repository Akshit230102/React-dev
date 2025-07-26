import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState, useEffect, useContext, use } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../Utils/UserContext";
import { RES_API_URL } from "../Utils/constants";
import { Link } from "react-router";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards.slice(3));
    setFilteredList(json?.data?.cards.slice(3));
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="flex items-center m-4">
          <input type="text" className="border-1 mx-2" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
          <button className="px-4 py-1 bg-green-100 rounded-xl hover:bg-green-200 cursor-pointer" onClick={()=>{
            setFilteredList(listOfRestaurants.filter((res)=> res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())))
          }}> Search 
          </button>
        </div>
        <button
          className="px-4 py-1 mx-4 my-3 bg-green-100 rounded-xl hover:bg-green-200 cursor-pointer"
          onClick={() => {
            const updatedList = listOfRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4.3
            );
            setFilteredList(updatedList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="px-4 py-1 mx-4 my-3">
          <label> Username</label>
          <input type="text" className="border-1 mx-2" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link key={restaurant?.card?.card?.info?.id} to={"/restaurant/"+restaurant?.card?.card?.info?.id}>
            {restaurant?.card?.card?.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
