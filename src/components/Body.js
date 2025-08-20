import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurant] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5174552&lng=81.7253415&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  };

  if(listOfRestaurants.length === 0){
    return <h1>Loading...</h1>
  }

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