import { useEffect, useState } from "react";
import { RES_INFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { ITEM_LIST } from "../data/resItemList";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  console.log("Rendering RestaurantMenu Component");
  // Always use hooks inside the component function body

  const { id } = useParams(); //useParam hook returns an object of key-value pairs of URL parameters.

  const resInfo = useRestaurantMenu(id); // Call Custom Hook

  const itemList = resInfo?.data;

  console.log("Restaurant Menu Info:", itemList);

  if (!itemList || itemList?.length === 0) {
    console.log("Res Info Rendered Ended");
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwo, sla } =
    itemList[2]?.card?.card?.info;

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
