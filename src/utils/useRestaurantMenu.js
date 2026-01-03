import { useState, useEffect } from "react";
import { ITEM_LIST } from "../data/resItemList";
import { RES_INFO_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("Fetching restaurant info for id:", id);
    fetchInfo();
  }, []);

  // Async function always returns a promise even if we don't explicitly return anything.
  const fetchInfo = async () => {
    try {
      // Not working due to CORS issue.
      const data = await fetch(RES_INFO_URL + "restaurantId=" + id);
      const info = await data?.json();
      setResInfo(info);
    } catch (error) {
      console.log("Error fetching restaurant info:", error);
      // Use mock data due to CORS issue
      setResInfo(ITEM_LIST);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;