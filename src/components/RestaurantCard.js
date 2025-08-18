import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
  } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-img" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Ratings : {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time : {resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;