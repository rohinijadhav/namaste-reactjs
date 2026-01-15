import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // Passing Props to component is nothing but  passing attributes to the functions as an object. eg { restData: value }
  // Here restData is props passing to RestaurantCard component So inside the component we can access it using props.restData.
  // or we can destructure it directly in the parameter like RestaurantCard({ restData }) and use it directly.   ;

  const { restData } = props; //Destructuring props
  // More Destructuring
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    restData?.info;

  return (
    <div className="rest-card w-60 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lime-600">
      <Link to={"/restaurant/" + id}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="rest-img"
          className="rest-img w-60 h-50 rounded-lg"
        />
        <div className="rest-details p-2">
          <h4 className="font-semibold">{name}</h4>
          <h5>{cuisines?.join(", ")}</h5>
          <h5>{avgRating} Rating</h5>
          <h5>{costForTwo}</h5>
          <h5>{sla?.slaString}</h5>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
