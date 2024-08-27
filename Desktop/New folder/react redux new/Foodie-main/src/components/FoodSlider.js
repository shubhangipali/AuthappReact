import React from "react";
import Slider from "react-slick";
import "./FoodSlider.css";
import { SliderData } from "./utils/sliderData";
import { ShimmerSlider } from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";

function Responsive() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    touchMove: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = SliderData;

  // online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return;

  // condition rendering
  if (data.length === 0) {
    return <ShimmerSlider />;
  }

  return (
    <div className="slider-main">
      <div className="container ">
        <div className="slider-cont">
          <h2>What's on your mind?</h2>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-year">
                      <img src={item.image} />
                    </div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Responsive;
