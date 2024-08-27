import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    // header,
    // subHeader,
    name,
    avgRating,
    totalRatingsString,
    // slaString,
    cuisines,
    costForTwo,
    locality,
  } = resData?.info;
  // const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
  const { slaString } = resData?.info?.sla;

  return (
    <div className="restaurant-card">
      <div className="image-container bg-color">
        <img src={CDN_URL + cloudinaryImageId} alt="card-img" />
        <div className="discount-badge">
          {/* {header} - {subHeader} */}
          Rating - {totalRatingsString}
        </div>
      </div>
      <div className="info-container">
        <h3 className="restaurant-name">{name}</h3>
        <div className="info-row">
          <div className="rating">
            <span className="review-count">
              <i className="fa-solid fa-star"></i>
              {avgRating}
            </span>
          </div>
          <div className="delivery-info">
            <i className="bi bi-dot"></i> {slaString}
          </div>
        </div>
        <p className="truncate p">{cuisines.join(",")}</p>
        <p className="truncate-2 p">{costForTwo}</p>
        <p className="truncate-2 p">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
