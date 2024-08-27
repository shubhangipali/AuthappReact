import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  // subscribing to the selector using useSelector
  const cartItems = useSelector((store) => store.cart.items);

  const [btnName, setBtnName] = useState("Login");

  // online status
  const onlineStatus = useOnlineStatus();

  const [add, setAdd] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.address));
    });
  }, []);


  return (
    <>
      <nav className="navbar navbar-expand-xxl nav-bg">
        <div className="container">
          <a className="navbar-brand" href="#0">
            <img src={require("../assets/logo/logo.png")} alt="logo" />
          </a>
          <button className="location-a">
            <span>
              {add.road} - {add.city}
            </span>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink to="/">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#0">
                    <i className="fa-solid fa-house"></i>
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="nav-item">
                  <a className="nav-link" href="#0">
                    <i className="fa-solid fa-user"></i>
                    About
                  </a>
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="nav-item">
                  <a className="nav-link" href="#0">
                    <i className="fa-solid fa-phone"></i>
                    Contact
                  </a>
                </li>
              </NavLink>
              <NavLink to="/cart">
                <li className="nav-item">
                  <a className="nav-link" href="#0">
                    <i className="fa-solid fa-cart-shopping">
                      <span className="count">{cartItems.length}</span>
                    </i>
                    Cart
                  </a>
                </li>
              </NavLink>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  Online :{"  "}
                  {onlineStatus ? (
                    <i className="fa-solid fa-wifi"></i>
                  ) : (
                    <i className="fa-solid fa-globe"></i>
                  )}
                </a>
              </li>
              <li>
                <button
                  className="sign-button"
                  onClick={() => {
                    btnName === "Login"
                      ? setBtnName("Logout")
                      : setBtnName("Login");
                  }}
                >
                  {btnName}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
