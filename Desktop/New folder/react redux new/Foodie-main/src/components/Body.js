import React, { useEffect, useState } from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();

    const json = require('./utils/mock_Restaurant.json')

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="container offline">
        <div className="icon">&#9888;</div>
        <h1>Looks like you're offline!</h1>
        <p>Please check your internet connection and try again.</p>
      </div>
    );

  // condition rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 cent-cont-body-dta">
              <button
                type="button"
                className="filter-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  // filter logic
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setListOfRestaurants(filteredList);
                }}
              >
                <span className="hover-underline-animation">
                  Top Rated Restaurants
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Categories Updated🎉
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 cent-cont-body-dta">
              <div className="filter">
                <div className="search-box">
                  <button
                    className="btn-search"
                    onClick={() => {
                      // Filter the restro cards
                      const filteredRestaurants = listOfRestaurants.filter(
                        (res) =>
                          res.info.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                      );
                      setFilteredRestaurants(filteredRestaurants);
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Type to Search..."
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="restaurant-container">
          <div className="row">
            {filteredRestaurants.map((restaurant) => (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <NavLink to={"/restaurants/" + restaurant.info.id}>
                  <RestaurantCard
                    key={restaurant.info.id}
                    resData={restaurant}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
