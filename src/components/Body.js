import RestaurantCard from "./RestaurantCard";
import { REST_LIST } from "../data/restaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Its a way to create state variable in react using usestate hook.
  // useState hook  - when want to update the data dynamically on UI when it changes.

  // [variable, setter function] its array destructuring
  const [listOfRestaurant, setListOfRestaurant] = useState([]);  // TO maintain the original list of restaurants
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);  // To maintain the filtered list of restaurants based on search or filter
  const [searchText, setSearchText] = useState("");

  console.log("Rendering Body Component");

  // useEffect hook - its a lifecycle method which runs after every render of the component.
  useEffect(() => {
    // API Call simulation using mock data with 1 sec delay to show Shimmer effect
    // and to understand how useEffect works after rendering a component.
    setTimeout(() => {
      setListOfRestaurant(REST_LIST);
      setFilteredRestaurant(REST_LIST);
      console.log("useEffect called - API data loaded");
    }, 500);
  }, []);

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);   
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedList = listOfRestaurant.filter((rest) => {
                return rest.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log("Searched List:", searchedList);
              setFilteredRestaurant(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="order-type">
          <ul>
            <li>Dine In</li>
            <li>Take away</li>
          </ul>
        </div>
        <div className="filter-container">
          <button
            className="filter-btn"
            type="button"
            onClick={() => {
              const filteredList = listOfRestaurant?.filter((res) => {
                return res.info.avgRating > 4;
              });
              // Update the state variable using its setter function. It will also trigger a re-render of the component.
              console.log("Filtered List:", filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
