import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";

const Body = () => {
  const [listOfRestaurant,setRestaurantList] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState([]);

  console.log("Rendered");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5174552&lng=81.7253415&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  if(listOfRestaurant.length==0){
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res)=>{
                const restaurantName = res?.info?.name;
                return restaurantName && restaurantName.toLowerCase().includes(searchText.toLowerCase());
              });
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="filter-btn">
            <button onClick={()=>{
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                setRestaurantList(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
};

export default Body;