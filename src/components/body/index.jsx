import React, { useState } from "react";
import RestaurantCard from "../restaurant-card";
import { restaurants } from "../../mocks/restaurants-data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  const filterTopRated = () => {
    const topRes = restaurants.filter((res) => {
      return res.info.avgRating > 4;
    });
    setListOfRestaurants(topRes)
  };

  return (
    <>
      <button onClick={() => filterTopRated()}>Top Rated</button>
      <button onClick={() => setListOfRestaurants(restaurants)}>See All</button>
      <div className="restaurant-card-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard
            key={res.info.id}
            restaurant={res.info}
          ></RestaurantCard>
        ))}
      </div>
    </>
  );
};

export default Body;
