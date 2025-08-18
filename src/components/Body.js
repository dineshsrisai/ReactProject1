import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
          onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >= 4
          );
            setListOfRestaurant(filteredList);
          }}
        >Filter</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;