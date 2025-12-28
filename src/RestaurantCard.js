import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // Passing Props to component is nothing but  passing attributes to the functions as an object. eg { restData: value }
  // Here restData is props passing to RestaurantCard component So inside the component we can access it using props.restData.
  // or we can destructure it directly in the parameter like RestaurantCard({ restData }) and use it directly.   ;

  const { restData } = props; //Destructuring props
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    restData?.info; // More Destructuring

  return (
    <div className="rest-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="rest-img"
        className="rest-img"
      />
      <h4>{name}</h4>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{avgRating} Rating</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
