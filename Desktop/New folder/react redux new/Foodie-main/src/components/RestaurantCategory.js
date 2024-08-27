import React, { useState } from "react";
import "./RestaurantCategory.css";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="accordionn">
      <div className="accordionn-item">
        {/* accordian header */}
        <div className="accordionn-bar" onClick={handleClick}>
          <div className="accordionn-header bg-gray-50">
            {data?.data?.title} - ({data?.data?.itemCards.length})
          </div>
          <span className="down-arroww">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        {/* accordian body */}
        <div className="accordionn-body">
          {showItems && <ItemList items={data?.data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
