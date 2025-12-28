import RestaurantCard from "./RestaurantCard";
import { REST_LIST } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Its a way to create state variable in react using usestate hook.
  let [listofRestaurant, setListofRestaurant] = useState(REST_LIST); // [variable, setter function] its array destructuring
  console.log("Rendering Restaurant Cards", listofRestaurant?.length);

  return (
    <div className="body">
      <div className="search-container">
        <div className="search-bar">
          Search <input className="search" type="text" />
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
              listofRestaurant = listofRestaurant?.filter((res) => {
                return res.info.avgRating > 4;
              });
              // Update the state variable using its setter function. It will also trigger a re-render of the component.
              setListofRestaurant(listofRestaurant);
              console.log("Top Rated Restaurants Filtered", listofRestaurant?.length);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container">
        {listofRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
