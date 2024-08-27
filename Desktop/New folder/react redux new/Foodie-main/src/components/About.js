import React from "react";
import "./About.css";
import useOnlineStatus from "./utils/useOnlineStatus";

const About = () => {
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

  return (
    <div>
      <section className="about-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="about-cont">
                <img
                  src={require("../assets/about/inverted-commas.png")}
                  alt="quotes"
                />
                <h3>
                  Our mission is to elevate the quality of life for the urban
                  consumer with unparalleled convenience. Convenience is what
                  makes us tick. It's what makes us get out of bed and say,
                  "Let's do this."
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="journey">
        <div className="container-fluid">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>The Swiggy Journey</h1>
            <img
              src={require("../assets/about/Swiggy-Journey.jpg")}
              alt="journey"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
