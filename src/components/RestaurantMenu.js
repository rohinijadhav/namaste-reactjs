import { useEffect, useState } from "react";
import { RES_INFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { ITEM_LIST } from "../data/resItemList";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // Always use hooks inside the component function body

  const { id } = useParams(); //useParam hook returns an object of key-value pairs of URL parameters.

  const [itemList, setItemList] = useState([]);

  console.log("Restaurant id from URL params:", id);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    // react-router-dom Hook to read the dynamic URL parameters.
    // /restaurant/:id - here id is the dynamic parameter which we are reading using useParams hook.

    // Not working due to CORS issue.
    // const data = await fetch(RES_INFO_URL + "restaurantId=" + id);
    // const json = await data?.json();

    // Take data from Mock JSON due to CORS issue.
    setItemList(ITEM_LIST);
  };

  if (itemList.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwo, sla} = itemList[2]?.card?.card?.info;

  return (
    <div className="res-info-container">
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{sla?.deliveryTime} minutes</h3>
        <h3>{avgRating} stars</h3>
        <h3>Cost for two: {costForTwo} </h3>

      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          <li>Burger</li>
          <li>Wings</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
