import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
// import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // fetch data

  const [resInfo, setResInfo] = useState(null);
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(MENU_API + resId);
    // const json = await data.json();

    const data = require("./mock_Menu.json");

    const Json = data.find((product) => {
      return product?.data?.cards[2]?.card?.card?.info?.id == resId;
    });

    const Rinfo = Json?.data?.cards[2]?.card?.card?.info;
    setResInfo(Rinfo);
    setItem(Json);
    // setResInfo(Json.data);
  };

  return [resInfo, item];
};

export default useRestaurantMenu;
