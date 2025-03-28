import { useEffect, useState } from "react";
import "../../index.css";
import { RES_URL } from "../utils/contants";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  const fetchRestaurents = async () => {
    let res = await fetch(RES_URL);
    let json = await res.json();
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchRestaurents();
  }, []);

  if (listOfRestaurants.length === 0) {
    // in todays ui we will not show this loading we will show shimmer ui -> we show the skeleton
    // return <div>{"loading......"}</div>;
    return <ShimmerUI />;
  }

  return (
    <div>
      <div className="filter-container">
        <div className="search-container">
          <input type="text" className="search-box" />
          <button>Search</button>
        </div>

        <button className="top-rated-btn">Top Rated Restaurents</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurent) => {
          return (
            <Link to={"/restaurent/" + restaurent.info.id}>
              <ResCard key={restaurent.info.id} resData={restaurent.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
