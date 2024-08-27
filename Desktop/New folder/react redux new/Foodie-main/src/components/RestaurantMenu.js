import React from "react";
import "./RestaurantMenu.css";
import { ShimmerMenu1 } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, item] = useRestaurantMenu(resId);

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

  if (resInfo === null) return <ShimmerMenu1 />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    city,
    locality,
  } = resInfo;

  const { slaString, lastMileTravelString } = resInfo?.sla;

  const itemCards =
    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    item?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    item?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards ||
    item?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.categories;

  const categories =
    item?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="container">
        <div className="aside-sec-menu">
          <div className="main-menu-starts">
            <div className="restro-heading">
              <h1>{name}</h1>
            </div>
            <div className="resto-details-box">
              <div className="inner-restro-details">
                <div className="inner-restro-detail-1">
                  <div className="inner-restro-detail-star review-count">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="inner-restro-detail-number">
                    {avgRating} ({totalRatingsString})
                  </div>
                  <div className="inner-restro-detail-dot">
                    <i className="fa-solid fa-circle"></i>
                  </div>
                  <div className="inner-restro-detail-cost">
                    {costForTwoMessage}
                  </div>
                </div>
                <div className="inner-restro-detail-2">
                  <p>{cuisines.join(" , ")}</p>
                </div>
                <div className="inner-restro-detail-3">
                  OUTLET{" "}
                  <p>
                    {locality} , {city}
                  </p>
                </div>
                <div className="inner-restro-detail-4">
                  Estimated Time <p>{slaString}</p>
                </div>
                <div className="inner-restro-detail-5">
                  <i className="fa-solid fa-location-dot"></i>(
                  {lastMileTravelString}) | Additinonal Delivery Fee Will Be
                  Applied
                </div>
              </div>
            </div>
          </div>
          <div className="main-dishes-start">
            {/* categories accordian */}
            {categories.map((category) => (
              <RestaurantCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
