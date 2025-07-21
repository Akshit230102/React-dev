import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const[filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setListOfRestaurants(json.data.cards.slice(3));
    setFilteredList(json.data.cards.slice(3));
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
          <button className="search-btn" onClick={()=>{
            setFilteredList(listOfRestaurants.filter((res)=> res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())))
          }}> Search 
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );
            setFilteredList(updatedList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
