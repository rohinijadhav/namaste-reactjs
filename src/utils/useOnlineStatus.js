import { useState } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true);
  console.log("Current online status:", onlineStatus);

  window.addEventListener("online", (event) => {
    console.log("You are now connected to the network.", event);
    setOnlineStatus(true);
  });

  window.addEventListener("offline", (event) => {
    console.log("You are now disconnected from the network.", event);
    setOnlineStatus(false);
  });

  return onlineStatus;
};

export default useOnlineStatus;
